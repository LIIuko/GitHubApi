import React, {useState} from 'react';
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import Repository from "../components/Repository";

const Search = () => {

    const [name, setName] = useState('');
    const [searchName, setSearchName] = useState('');

    const search = (event) => {
        event.preventDefault();
        setSearchName(name);
        setName('');
    }

    return (
        <div>
            <form onSubmit={search}>
                <MyInput value={name} type="text" onChange={(event) => setName(event.target.value)}/>
                <MyButton title={'Поиск'}/>
            </form>
            <Repository name={searchName}/>
        </div>
    );
};

export default Search;