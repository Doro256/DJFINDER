import React,{Fragment,useState} from 'react'
import {img_home,img_add,img_search} from './data/images'
import Background from './components/Background'
import AddAppointment from './components/AddAppointment'
import SearchContent from './components/SearchContent'
import {SideContent,SideContentButton} from './components/SideContent'
import {RecordsContent} from './components/RecordsContent'
import Header from './components/Header'
// import {Editmodal} from './components/Editmodal'
import './App.css'


function App(){
    
    const [isAddPane,setIsAddPane] = useState(false)
    const [isRecordsPane,setIsRecordsPane] = useState(true)
    const [isSearchPane,setIsSearchPane] = useState(false)
    const [header,setHeader] = useState('DJFinder')
    const [subHeader,setSubHeader] = useState('TODAY')

    const updatePane = setPane => () =>{
        setIsAddPane(false)
        setIsRecordsPane(false)
        setIsSearchPane(false)
        setPane(true)
    }

    const Pane = () =>{
        if (isRecordsPane){
            setHeader('DJFinder')
            setSubHeader('Find your perfect DJ, hassle-free')
            return(<RecordsContent/>)
        }
        else if (isAddPane){
            setHeader('Book your favorite DJ')
            setSubHeader('Booking')
            return(<AddAppointment/>)
        }
        else if (isSearchPane){
            setHeader('Search Record')
            setSubHeader('Date Range')
            return(<SearchContent/>)
        }
    }

    console.log('isAddPane - isRecordsPane - isSearchPane',isAddPane,isRecordsPane,isSearchPane)

    return(
        <Fragment>
            <Background/>
            <div className="app-body">
                <div className="main">
                    <Header header={header} sub_header={subHeader}/>
                    <div className="content">
                        <SideContent>
                            <SideContentButton on_click={updatePane(setIsRecordsPane).bind(this)} img_src={img_home} title='HOME'/>
                            <SideContentButton on_click={updatePane(setIsAddPane).bind(this)} img_src={img_add} title='ADD'/>
                            <SideContentButton on_click={updatePane(setIsSearchPane).bind(this)} img_src={img_search} title='SEARCH'/>
                        </SideContent>
                        <Pane/>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default App

