// with react we are trying to manipulate DOM with JS
const heading = React.createElement(
    'h1',//element
    // inside this we are giving attributes to elements eg: id
    { id: 'heading', myattribute: 'myId' },
    'Heading - React !');//children

console.log(heading);//object


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
// what is Render?
//As in node.js render we are passing the content to render as an object
// here it is "Heading"


//  NESTED
// const parent = React.createElement(
//     'div',
//     {id:'parent'},
//     React.createElement(
//         'div',
//         {id:'child'},
//         React.createElement(
//             'h1',
//             {id:'nestheading'},
//             'Nested Heading'
//         )
//     )
// );

// // Wrap both elements inside one root div
// const container = React.createElement(
//     'div',
//     null,
//     heading,
//     parent
//   );

// create only one root 

const parent = React.createElement(
    'div',
    { id: 'parent' }, [
    React.createElement(
        'div',
        { id: 'child' },
        [
            React.createElement('h1', {}, 'Heading 1'),//more than one child, put in array
            React.createElement('h2', {}, 'Heading 2')
        ]
    ),
    React.createElement(
        'div',
        { id: 'child2' },
        [
            React.createElement('h1', {}, 'Heading 1(child2)'),//more than one child, put in array
            React.createElement('h2', {}, 'Heading (child 2)'),
            React.createElement('button',{},'click') 
        ]
    )
]
)

// now I want two elements in the child
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)
