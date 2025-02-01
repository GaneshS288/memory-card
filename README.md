# Memory Cards

This site uses react and vite and pokeapi.co for the imgs and data. It's a game where you have click on all the unslected card without clicking on an already selected card

## Challanges faced

- I had to think about when to fetch the images. In the end I used ``useEffect`` to fetch them on page load. If I ever implement levels of difficulty then this would be moved to an event listener that triggers when clicking a play round button.

- The card flipping animations were a bit hard to implement. If I updated the data on animationEnd event directly then all the cards would be marked as selected. The fix for this was to track the currently selected card's data with a state in cards container. this way I could check if card component's data prop matched the state in cards container when animation end event fires.

- Fetching gave me a bit of trouble due to react's rerendering on state change being synchronous and data fetching async. I managed with creating a utility function that returns a promise with the an array of data objects as fulfilled value
