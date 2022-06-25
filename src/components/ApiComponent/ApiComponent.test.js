import mockAxios from "jest-mock-axios";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ApiComponent from "./ApiComponent.jsx";
import * as APIS from "../../API/ApiUtils";

describe("UI Tests", () => {
  beforeEach(() => {
    mockAxios.reset();
    const posts = [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      },
    ];

    // mockAxios.get.mockResolvedValueOnce(posts);
    mockAxios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: posts }))
    );
  });

  it("should fetch posts", async () => {
    await waitFor(async () => await render(<ApiComponent />));
    await waitFor(async () => {
      expect(mockAxios.get).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts"
      );
    });
  });

  it("should test number of headings", async () => {
    await waitFor(async () => await render(<ApiComponent />));
    await waitFor(async () => {
      const titleElements = screen.getAllByRole("heading", { level: 3 });
      expect(titleElements.length).toEqual(3);
    });
  });

  it("should test the API error", async () => {
    mockAxios.reset();
    mockAxios.get.mockRejectedValue(
      new Promise((resolve, reject) => reject('Some error occured'))
    );
    await waitFor(async () => await render(<ApiComponent />));
    await waitFor(async () => {
      const errorElements = screen.getByRole("heading", { level: 3 });
      expect(errorElements).toBeInTheDocument();
    });
  });


  it("should test the component is rendered correctly", async () => {
    await waitFor(async () => await render(<ApiComponent />));
    expect(
      screen.getByText(/API Component/i, { exact: false })
    ).toBeInTheDocument();
  });

  it("should test the snapshot", async () => {
    const { container } = await waitFor(
      async () => await render(<ApiComponent />)
    );
    expect(container).toMatchSnapshot();
  });
});
