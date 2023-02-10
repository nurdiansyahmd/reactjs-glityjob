import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    const [data, setData] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true)
    const [currenId, setCurrentId] = useState(-1)
    const navigate = useNavigate()
    const [input, setInput] = useState({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure:"",
        job_status: "",
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: "",
        salary_max: "",
        current_password: "",
        new_password: "",
        new_confirm_password: ""
    })
    
    const [search, setSearch] = useState({title : ""})
    const [filter, setFilter] = useState({
        company_city: "",
        job_type: "",
        job_tenure: ""
    })

    // Handle Input
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "title"){
            setInput({...input, title: value})
        }else if(name === "job_description"){
            setInput({...input, job_description: value})
        }else if(name === "job_qualification"){
            setInput({...input, job_qualification: value})
        }else if(name === "job_type"){
            setInput({...input, job_type: value})
        }else if(name === "job_tenure"){
            setInput({...input, job_tenure: value})
        }else if(name === "job_status"){
            setInput({...input, job_status: value})
        }else if(name === "company_name"){
            setInput({...input, company_name: value})
        }else if(name === "company_image_url"){
            setInput({...input, company_image_url: value})
        }else if(name === "company_city"){
            setInput({...input, company_city: value})
        }else if(name === "salary_min"){
            setInput({...input, salary_min: value})
        }else if(name === "salary_max"){
            setInput({...input, salary_max: value})
        }
    }

    // Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input);
        // Destructuring object
        let {title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max} = input
        
        if(currenId === -1){
            // post to api
            axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', {title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max
            },{
                headers: {"Authorization" : "Bearer "+ Cookies.get('token')
            }})
            .then((res)=>{
                // console.log(res);
                navigate('/dashboard/list-job-vacancy')
                setFetchStatus(true)
                alert('Data berhasil ditambahkan!')
            })
    
        }else{
            // update data
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currenId}`, {
                title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max
            },{
                headers: {"Authorization" : "Bearer "+ Cookies.get('token')
            }})
            .then((res)=>{
                // console.log(res);
                navigate('/dashboard/list-job-vacancy')
                setFetchStatus(true)
                alert('Data berhasil diubah!')
            })
        }

        setCurrentId(-1)

        // clear input
        setInput(
            {
                title: "",
                job_description: "",
                job_qualification: "",
                job_type: "",
                job_tenure:"",
                job_status: "",
                company_name: "",
                company_image_url: "",
                company_city: "",
                salary_min: "",
                salary_max: ""
            }
          )
    }

    // Handle Edit
    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)

        setCurrentId(idData)
        
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
        .then((res)=>{
            let data = res.data
            console.log(data)
            setInput(
                {
                    title           : data.title,
                    job_description : data.job_description,
                    job_qualification: data.job_qualification,
                    job_type        : data.job_type,
                    job_tenure      :data.job_tenure,
                    job_status      : data.job_status,
                    company_name    : data.company_name,
                    company_image_url: data.company_image_url,
                    company_city    : data.company_city,
                    salary_min      : data.salary_min,
                    salary_max      : data.salary_max
                }
              )
        })
    }

    // Handle Delete
    const handleDelete = (event)=> {
        let idData = parseInt(event.target.value)
        
        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,{
            headers: {"Authorization" : "Bearer "+ Cookies.get('token')
        }})
        .then((res)=>{
            console.log(res);
            setFetchStatus(true)
        })
    }

    // handle Input Password
    const handleInputPassword = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "current_password"){
            setInput({...input, current_password: value})
        }else if(name === "new_password"){
            setInput({...input, new_password: value})
        }else if(name === "new_confirm_password"){
            setInput({...input, new_confirm_password: value})
        }
    }

    // Handle Submit Password
    const handleSubmitPassword = (event) => {
        event.preventDefault()

        let {current_password, new_password, new_confirm_password} = input
        
       if(input.new_password === input.new_confirm_password){
            axios.post('https://dev-example.sanbercloud.com/api/change-password', {current_password, new_password, new_confirm_password
            },{
                headers: {"Authorization" : "Bearer "+ Cookies.get('token')
            }})
            .then((res)=>{
                // console.log(res);
                alert('Password berhasil diubah!')
                setFetchStatus(true)
            })
        }else{
           alert('Password tidak cocok!');
       }


       // clear input
       setInput(
        {
            current_password: "",
            new_password: "",
            new_confirm_password: ""
        }
      )
    }

    // Handle Price
    const handlePrice = (price)=> {
        if(price === 0 || price === null){
           return 'Perusahaan tidak menampilkan gaji'
        }else{
            return (price).toLocaleString('en-US',{
                    style: 'currency',
                    currency: 'IDR'
                })
        }
    }

    // Filtering

    const handleChangeSearch = (event) => {
        setSearch({...search, [event.target.name] : event.target.value})
        
    }

    const handleSearch = (event)=>{
        event.preventDefault()

        console.log(search);

        let fetchSearchData = async() => {
            setData(null)
            let {data} = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            let result = data.data

            let searchData = result.filter((res)=>{
                return Object.values(res).join("").toLowerCase().includes(search.title.toLowerCase())
            })
            
            console.log(searchData);
            setData([...searchData])
        }

        fetchSearchData()
    }

    const handleChangeFilter = (event) => {
        if(event.target.value !== "Pilih Kota"){
            setFilter({...filter, [event.target.name] : event.target.value})
        }else{
            setFilter({...filter, [event.target.name] : ""})
        }
    }

    const handleFilter = (event) => {
        event.preventDefault()
        console.log(filter);

        let fetchFilterData = async() => {
            setData(null)
            let {data} = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            let result = data.data
            console.log(result);

            let searchFilter = result.filter((res)=>{
                return res.company_city.toLowerCase() === filter.company_city.toLowerCase() ||
                res.job_type.toLowerCase() === filter.job_type.toLowerCase()||
                res.job_tenure.toLowerCase() === filter.job_tenure.toLowerCase() 
                
            })
            
            console.log(searchFilter);
            setData([...searchFilter])
        }

        fetchFilterData ()
    }

    return(
        <GlobalContext.Provider value={
            {
                data,
                setData,
                input,
                setInput,
                fetchStatus,
                setFetchStatus,
                handleInput,
                handleSubmit,
                handleDelete,
                handleEdit,
                handleInputPassword,
                handleSubmitPassword,
                handlePrice,
                handleChangeSearch,
                handleSearch,
                handleChangeFilter,
                handleFilter
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}