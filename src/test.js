const getBudget = async () => {
    const key = process.env.REACT_APP_API_KEY
    
    fetch(`https://api.themoviedb.org/3/movie/123?api_key=${key}&language=en-US`).then((data) => {
      return data.json()
    }).then((data) => {
      console.log(data.budget)
    })
};

export default getBudget