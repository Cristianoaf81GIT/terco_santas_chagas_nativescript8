## Monday component: [pending]

    ```
        1 - create an object with its specific type (typdefs folder) to alocate evangelion
        data to perform a request to server, get evangelion text.
            1.1 - define a type (TEvangelion) where object key is a number (1 to 5 representing
            rosary misteries).
            1.2 - the object must contains this specific keys: {
                [k: number]: {
                    book: string,
                    chapter: number,
                    start: number,
                    end: number,
                    weekday: mon | tue | wed | thu | fri | sat | sun
                }
            }.
        2 - create a dialog service to show alerts.
        3 - create a httpClientService to requests evangelion data for each misteries.
        4 - componentize bottom sheet to reutilize it all over the app.
    ```
