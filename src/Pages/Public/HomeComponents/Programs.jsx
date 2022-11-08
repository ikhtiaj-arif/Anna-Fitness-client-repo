import React, { useEffect, useState } from 'react';
import ProgramCard from './ProgramCard';

const Programs = () => {
    // all program data
    const [allPrograms, setAllPrograms] = useState([]);
    const [loadPrograms, setLoadPrograms] = useState([])
    const [programCount, setProgramCount] = useState(0);
    useEffect(()=>{
        fetch('http://localhost:5000/allPrograms')
        .then(res => res.json())
        .then(data => {
            setAllPrograms(data)
            setProgramCount(data.length)
        })
    },[])

    const [size, setSize] = useState(3);
    const [page, setPage] = useState(0);
    const pages = Math.ceil(programCount / size);

    useEffect(()=> {
        fetch(`http://localhost:5000/filterPrograms?page=${page}&size=${size}`)
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            setLoadPrograms(data)
           
        })
    },[page, size])

// all program data end





    return (
        <div>
            <h2>limit 3 programs  {programCount}//{pages}// loaded:{loadPrograms.length}</h2>
           
           {
            loadPrograms.map(program => <ProgramCard
            key={program._id}
            program={program}
            ></ProgramCard>)
           }
            <div className="pagination">
                {
                    [...Array(pages).keys()].map(e => <button
                    key={e}
                    className="btn btn-danger" 
                    onClick={()=>setPage(e)} 
                    >{e}</button>)

                    
                }
                <button onClick={()=>setLoadPrograms(allPrograms)}>see all Programs</button>
            </div>
        </div>
    );
};

export default Programs;