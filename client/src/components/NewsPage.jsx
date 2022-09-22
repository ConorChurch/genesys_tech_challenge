import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import '../style/news_stories.css';

// This function retrieves the latest news stories from the proxy server
// we wish to see display to the screen
function getNewsStories(setListOfNewsStories){
    axios.get("http://localhost:4000/getNewsStories")
        .then(response => {
            //console.log(response)
            setListOfNewsStories(response)
            return response.data
        })
        .catch(error => {
            console.log(error)
        })
}

function NewsPage() {
    const [listOfNewsStories, setListOfNewsStories] = useState([]);

    // When the web page loads, the account id is retreived by calling the getAccountID function
    useEffect(() => {
        // When the page first loads we want to fetch the stories
        getNewsStories(setListOfNewsStories);

        // Update the page every 100 seconds
        const interval=setInterval(() => {
            getNewsStories(setListOfNewsStories);
        }, 100000)

        // clear the timer after each refresh
        return () => clearInterval(interval)

    }, [])

    //console.log(listOfNewsStories);

    // A possible addition is to check if the values are all there 
    // when they are first returned in the proxy server
    return (
      <div className="newsPage">
        <header className="header">
            <h1>Hacker News</h1>
            <ul>
                <li><a href="#new">New</a></li>
                <li><a href="#past">Past</a></li>
                <li><a href="#comments">Comments</a></li>
                <li><a href="#ask">Ask</a></li>
                <li><a href="#show">Show</a></li>
                <li><a href="#jobs">Jobs</a></li>
                <li><a href="#submit">Submit</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </header>
        <div className="list">
            {listOfNewsStories.data?.map((story,i) => (
                <div key={i} className={"story"+i%2} data-testid={"div-"+i}>
                    {story.title !== null &&
                        <h3>{story.title}</h3>
                    }
                    {story.score !== 1 &&
                         <p><small>{story.score} points by {story.by}</small></p>
                    }
                    {story.score === 1 &&
                        <p><small>{story.score} point by {story.by}</small></p>
                    }
                    <p><small>{Math.floor(((Date.now()/1000)-story.time)/60)} minutes ago</small></p>
                    <p><small>hide | past | discuss</small></p>
                    {story.url !== null &&
                        <p><small>URL: {story.url}</small></p>
                    }
                </div>
                ))}
        </div>
        <footer className="footer">
                <p>Applications are open for YC Winter 2023</p>
                <p><small>Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact</small></p>
                <input type="text" placeholder="Search for stories..."></input>
        </footer>
      </div>
    );
  }
  
  export default NewsPage;
  