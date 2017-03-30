var ourStorage = {
    "desk" : {
        "drawer": "staper"
    },
    "cabiner" : {
        "top drawer" : {
            "folder1": "a file",
            "folder2": "secret"
        },
        "bottom drawer":"soda"
    }


};

ourStorage.cabiner["top drawer"].folder1; // secret
ourStorage.desk.drawer; //staper

