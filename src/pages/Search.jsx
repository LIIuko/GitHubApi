import React, {useState} from 'react';
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import Repository from "../components/Repository";
import classes from '../styles/Seacrh.module.css'

const Search = () => {

    const [name, setName] = useState('');
    const [searchName, setSearchName] = useState('');

    const search = (event) => {
        event.preventDefault();
        setSearchName(name);
        setName('');
    }

    return (
        <>
            {
                searchName !== ''
                    ?
                    <div className={''}>
                        <form onSubmit={search}>
                            <MyInput placeholder={'Введите имя профиля на GitHub'} value={name} type="text" onChange={(event) => setName(event.target.value)}/>
                            <MyButton title={'Поиск'}/>
                        </form>
                        <Repository name={searchName}/>
                    </div>
                    :
                    <div className={classes.searchForm}>
                        <form style={{width: '100%'}} onSubmit={search}>
                            <MyInput placeholder={'Введите имя профиля на GitHub'} value={name} type="text" onChange={(event) => setName(event.target.value)}/>
                            <MyButton title={'Поиск'}/>
                        </form>
                        <Repository name={searchName}/>
                    </div>

            }


        </>
    );
};

export default Search;