class myclass {
    constructor (
        title,
        first_name,
        last_name,
        gender
    )
    {
        this.title = title;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
    }
    changeFirstName(f_name) {
    this.first_name = f_name;
    }
};


export default myclass