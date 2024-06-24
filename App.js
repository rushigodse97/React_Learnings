    const heading=React.createElement(
        "h1",
        {id: "heading"},
         "Hello World from React!");
    const root=ReactDOM.createRoot(document.getElementById("root"));

    const parent=React.createElement("div",{id:"parent1"},[
        React.createElement("div",{id:"child1"},"Child 1 Added!"),
        React.createElement("h1",{id:"child2"},[
            React.createElement("h3",{},"Child of Child 2!"),
        ]),    
    ]);
    //root.appendChild(parent);
    root.render(heading);
    root.render(parent);
 