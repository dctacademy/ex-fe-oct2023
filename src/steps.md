# Categories Module


## List Functionality
    1. create a state variable 
    ```
        const [categories, setCategories] = useState([])
    ```

    2. Listing 
        * conditional rendering 
        - display no categories found 
        - list of categories 

    3. Fetch data from server
        * useEffect hook
        * axios.get() 

## Add Functionality 
    1. Create a form - make it controlled component 
    2. handle submit event handler 
    3. build a formData
    4. axios.post()
    5. update the ui from the server response (concat)

## edit functionality 
    1. inside map, create edit button
    2. write inline event handler
    3. pass the object as arguemnt to the function
    4. make api call - axios.put() 
    5. once response from the server, update the ui  (map)

## delete functionality
    1. inside map, create edit button
    2. write inline event handler
    3. pass the object as arguemnt to the function
    4. make api call - axios.delete() 
    5. once response from the server, update the ui (filter)
