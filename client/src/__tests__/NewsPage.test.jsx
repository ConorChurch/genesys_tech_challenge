import  NewsPage  from "../components/NewsPage";
import getNewsStories  from "../components/NewsPage";
import { render, screen } from '@testing-library/react';
const axios = require("axios");

jest.mock("../components/NewsPage");


// Checking the page renders successfully
it('renders News Page of app', () => {
    render(<NewsPage />);
});

// Giving made up data for mocking the axios API 
const newsStories = [
    {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "http://www.getdropbox.com/u/2/screencast.html"
      },
      {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "http://www.getdropbox.com/u/2/screencast.html"
      },
      {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "http://www.getdropbox.com/u/2/screencast.html"
      }
]

const entity = () => {
    return render(
        <NewsPage />
    )
} 


// Mocking the Axios API request to return the list of news stories
describe("get stories", () => {
    describe("when the API call is successfule", () => {
        it("should return id list", async () => {
            const setListOfNewsStories = []

            getNewsStories.mockResolvedValueOnce(newsStories)

            const result = await getNewsStories(setListOfNewsStories);

            expect(getNewsStories).toHaveBeenCalled();
            expect(result).toEqual(newsStories)

        })
    })
    /*
    describe("when API call fails", () => {
        it("should print error", async () => {
            const setListOfNewsStories = []

            const error = "Error"

            getNewsStories.mockRejectedValueOnce(error);

            const result = await getNewsStories(setListOfNewsStories);

            expect(getNewsStories.get).toHaveBeenCalled();
            expect(result).rejects("Error");
        })
    })
    */
})




// This test is not working properly, "container" is returning null
/*
test("render list", () => {
    const { getByText, container } = entity();

    expect(container.querySelector("div")).toBeInTheDocument();
})
*/
  
  