import axios from 'axios';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ApiComponent from './ApiComponent.jsx';


describe('UI Tests', () => {

    it("should fetch posts", async () => {
        const posts = [
            {
              "userId": 1,
              "id": 1,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
              "userId": 1,
              "id": 2,
              "title": "qui est esse",
              "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
              "userId": 1,
              "id": 3,
              "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
              "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            }];
        
        axios.get.mockResolvedValueOnce(posts);
        waitFor(() =>render(<ApiComponent />));
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
      });


    
    
    it('should test the component is rendered correctly', () => {
        waitFor(() =>render(<ApiComponent />));
        expect(screen.getByText(/API Component/i, {exact: false})).toBeInTheDocument();
    });
    
    it('should test the component is rendered correctly', () => {
        render(<ApiComponent />)
        expect(screen.getByText(/API Component/i)).toBeInTheDocument();
    });
});