  
    color: "#ff4500",
    behavior: behaviors.MOLTEN,
    category: "liquids",
    state: "liquid",
    density: 2500,
    temp: 1200,
    reactions: {
        "water": { "elem1": "steam", "elem2": "rock" },
        "ice": { "elem1": "steam", "elem2": "rock" },
        "snow": { "elem1": "steam", "elem2": "rock" },
        "rock": { "elem1": "elem2": "basalt", chance: 0.1 }
    },
    tempLow: 800,
    stateLow: "basalt",
    conduct: 0.01,
    heatConduct: 0.3,
};
