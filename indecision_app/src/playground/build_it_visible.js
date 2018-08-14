//visibility toggle title

//button that says show details
//when clicked, it says hide details
//when clicked, it prints details to the screen or removes them

const appRoot = document.getElementById('app');

//my solution

// let toggleMessage = 'Show details';

// let showHide = null;

// const renderDetails = () => {
//   if (toggleMessage === 'Hide details') {
//     toggleMessage = 'Show details';
//   } else if (toggleMessage === "Show details") {
//       toggleMessage = 'Hide details';
//   }

//   if (showHide === null) {
//     showHide = 'details';
//   } else if (showHide === 'details') {
//       showHide = null;
//   }

//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={renderDetails}>{toggleMessage}</button>
//       <p>{showHide}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }

// render();

//his solution

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see.</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, appRoot);
};

render();
