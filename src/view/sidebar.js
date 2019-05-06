import React, { Component } from 'react'
import shortid from 'shortid'
import ContentEditable from 'react-contenteditable'

import user from 'assets/user.jpg'
import './sidebar.css'
import Input from './input'
import Dropdown from './dropdown'
import './input.css'
import plus from 'assets/plus-1.svg'


class Sidebar extends Component {
    state = {
        showInput: false,
        type: "",
        contacts: [
            {id: shortid.generate(), data: "vitalya@gmail.com", type: "Емейл"},
            {id: shortid.generate(), data: "vitalya.getsome.com", type: "Ссылка"},
            {id: shortid.generate(), data: "streeet 13", type: "Адрес"},
            {id: shortid.generate(), data: "0934324352", type: "Телефон"}
        ],
        id: "",
        html: "<p>Lorem Ipsum - это текст-'рыба', часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>",
        selectID: ""
    }

    componentDidMount() {
        document.body.addEventListener('click', (e) => {

            this.toggleContextMenu(e)

            if (document.getElementById('editInput') !== null && e.target.classList.contains('contact')) {
                document.getElementById('editInput').remove()
                document.querySelector('.hide').classList.remove("hide")
            }

            if (!e.target.classList.contains('edit') && document.getElementById('editInput') !== null) {
                this.saveEditedToState()
            }

            if (!e.target.classList.contains('num') && this.state.showInput) {
                this.addItemToState()
            } 
        })
    }

    toggleContextMenu = (e) => {
        let selectID = e.target.id.slice(0, e.target.id.indexOf('-item'))
        if (e.target.className === 'contact' && document.querySelectorAll(`.show`).length === 0) {
            this.setState({selectID: selectID})
            document.getElementById(`${this.state.selectID}-drop`).classList.toggle('show')
        } else {
            document.querySelectorAll(`.show`).forEach(item => item.classList.remove('show'))
        }
    }




    addInput = (type, id) => {
        this.state.showInput 
        ? this.setState({ showInput: false})
        : this.setState({ showInput: true, type: type, id: id})
    }

    addItemToState = () => {
        let element, ind

        document.querySelector('.num').value !== ""
        ? element = document.querySelector('.num').value
        : element = "..."

        this.state.contacts.forEach((item, index) => item.id === this.state.id ? ind = index : console.log('hzhz'))
        this.setState({
            contacts: [
                ...this.state.contacts.slice(0, ind + 1),
                {id: shortid.generate(), data: element, type: this.state.type},
                ...this.state.contacts.slice(ind + 1, this.state.contacts.length)
            ],
            showInput: false
        })
    }

    saveEditedToState = () => {
        let input = document.getElementById('editInput')
        for (let i = 0; i < this.state.contacts.length; i++) {
            if (this.state.contacts[i].id === this.state.selectID) {
                console.log(input.value)
                this.setState({
                    contacts: [
                        ...this.state.contacts.slice(0, i),
                        {id: this.state.contacts[i].id, data: input.value, type: this.state.contacts[i].type},
                        ...this.state.contacts.slice(i + 1, this.state.contacts.length + 1)
                    ]
                })
                input.remove()
                document.getElementById(`${this.state.selectID}-num-el`).classList.remove("hide")
            }   
        }
    }

    copy = () => {
        let copyText = document.getElementById(`${this.state.selectID}-item`).innerText
        navigator.clipboard.writeText(copyText)
    }

    edit = () => {
        document.getElementById(`${this.state.selectID}-num-el`).classList.add("hide")
        let input = document.createElement('input');
        input.className = "edit num"
        input.id = "editInput"
        for (let i = 0; i < this.state.contacts.length; i++) {
            this.state.contacts[i].id === this.state.selectID
            ? input.value = `${this.state.contacts[i].data}`
            : console.log(null)
        }
        document.getElementById(this.state.selectID).appendChild(input)
    }

    remove = () => {
        for (let i = 0; i < this.state.contacts.length; i++) {
            if (this.state.contacts[i].id === this.state.selectID) {
                this.setState({
                    contacts: [
                        ...this.state.contacts.slice(0, i),
                        ...this.state.contacts.slice(i + 1, this.state.contacts.length + 1)
                    ]
                })
            }
        }
    }

    changeText = evt => {
        this.setState({html: evt.target.value});
        console.log('text edited')
    };

    render() { 
        return (
            <>
                <div className="header">
                    <h1 className="client">Клиент</h1>
                    <h1 className="crm">CRM</h1>
                    <h1 className="crm">CRM</h1>
                </div>
                <div className="main">
                    <div className="user">
                        <img src={user} alt=""/>
                        <span className="name">Виталий Давиденко</span>
                    </div>
                    <h2>Канал связи:</h2>
                    <div className="social">
                        <div className="item">
                            <i className="fab fa-telegram-plane"></i>
                            @Vitaliy243
                        </div>
                        <div className="item">
                            <i className="fas fa-phone-volume"></i>
                            Виталий Давиденко
                        </div>
                    </div>
                    <h2>Контакти: </h2>
                    <div className="contacts">
                        {this.state.contacts.map(item => (
                            <>
                                <div className="number" id={item.id}>
                                    <div className="type">
                                        <div id={`${item.id}-type`}>{item.type}</div>
                                        <div>:</div> 
                                    </div>                                    
                                    <div id={`${item.id}-num-el`} className="num-el">
                                        <span id={`${item.id}-plus`} onClick={() => this.addInput(item.type, item.id)}>
                                            <img className="plus" src={plus} alt=""/>
                                        </span>
                                        <span>
                                            <div id={`${item.id}-item`} className="contact">{item.data}</div>
                                            <Dropdown 
                                                id={item.id} 
                                                copy={this.copy} 
                                                edit={this.edit} 
                                                remove={this.remove} 
                                            />
                                        </span>
                                    </div>
                                </div>
                                {this.state.showInput && this.state.id === item.id && <Input id={item.id} type={this.state.type}/>}
                            </>
                        ))}
                    </div>
                    <h2>Примечание:</h2>
                    <div className="adds">
                        <ContentEditable
                            innerRef={this.contentEditable}
                            html={this.state.html} 
                            disabled={false}      
                            onChange={this.changeText} 
                            tagName='p' 
                        />
                    </div>
                </div>
            </>
        );
    }
}
 
export default Sidebar;