import React from 'react';

const BlogForQnAndAns = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl text-center my-8'>Frequently asked <span className='underline'>questions and answers</span> </h1>

            {/* question 1  */}
            <div className='mb-3 px-2'>
                <h2 className='font-bold text-2xl'>What is the difference between props and state in react ?</h2>
                <p>
                Props are used to pass data from a parent component to a child component.
                 The child component cannot modify the props that it receives. 
                 The values of props are set by the parent component, and they do not change during the lifetime of the child component.
                  Function, array, ohject anything can be passed using props.
                  <br />
                  state is an updatable structure that is used to contain data or information about the component.
                   The state in a component can change over time. The change in state over time can happen as a response to user action or system event. 
                   A component with the state is known as stateful components. 
                   It is the heart of the react component which determines the behavior of the component and how it will render. 
                   They are also responsible for making a component dynamic and interactive.
                   <br />
                   state should be important before use but props dose not need to be imported from node_module folder.
                </p>
            </div>
            {/* question 2  */}
            <div className='mb-3 px-2'>
                <h2 className='font-bold text-2xl'>How does useState work ?</h2>
                <p>
                state works by providing a two-element array, where the first element is the current state value,
                 and the second element is a function that used to update the state.

                </p>

            </div>
            {/* question 3  */}
            <div className='mb-3 px-2'>
                <h2 className='font-bold text-2xl'> What are the purpose of useEffect other than fetching data ?</h2>
                <p>
                Some common use cases for useEffect that don't involve fetching data: <br />
                
                    Updating the document title <br />
                    Adding event listeners <br />
                    Managing timers and intervals <br />
                    Managing animations <br />
                    Modifying the DOM based on dependencies
                

                </p>

            </div>
            {/* question 4  */}
            <div className='mb-3 px-2'>
                <h2 className='font-bold text-2xl'> How Does React work ?</h2>
                <p>
                React is a JavaScript library for building user interfaces.
                 It works by building a tree of components that represent the UI,
                  using a virtual DOM to manage updates, 
                  and providing a set of lifecycle methods to control component behavior.
                  The virtual DOM is copy of the actual DOM that React uses to determine what needs to be updated in the UI when a component's state or props change.
                   When a component's state or props change, React compares the new virtual DOM with the previous one to determine which parts of the UI need to be updated.

                </p>

            </div>
        </div>
    );
};

export default BlogForQnAndAns;