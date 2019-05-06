import React, { Component } from 'react'
import user from 'assets/user.jpg'
import './sidebar.css'
import Input from './input'
import Dropdown from './dropdown'
import './input.css'


class Sidebar extends Component {
    state = {
        showInput: false,
        type: "",
        contacts: [
            {id: 0, number: "vitalya@gmail.com", type: "Емейл"},
            {id: 1, number: "vitalya.getsome.com", type: "Ссылка"},
            {id: 2, number: "streeet 13", type: "Адрес"},
            {id: 3, number: "0934324352", type: "Телефон"}
        ],
        id: "",
        contextID: "",
        selectID: ""
    }

    componentDidMount() {
        document.body.addEventListener('click', (e) => {
            e.path.length === 11
            ? this.setState({selectID: e.path[1].id})
            : console.log(e.path[1].id, 'selectID')
            if (this.state.showInput) {
                e.target === document.querySelector('.num')
                ? console.log('zaebumba')
                : this.addNumberToState()
            } 
            if (e.target !== document.querySelector('#editInput') && document.querySelector('#editInput') !== null) {
                this.saveEditedToState()
            }
        })
        document.body.addEventListener('keydown', (e) => {
            if (e.keyCode === 13 && this.state.showInput) {
                this.addNumberToState()
            }
        })
        document.body.addEventListener('click', (e) => {
            if (e.path[1].id === e.path[2].id + '-num' && e.path.length === 11) {
                this.setState({contextID: `${e.path[2].id} + '-num'`})
                document.querySelectorAll('.show').length === 0
                ? document.getElementById(`${e.path[2].id}-drop`).classList.add('show')
                : document.querySelector('.show').classList.remove('show')
            } else {
                if (document.querySelectorAll('.show').length === 1) {
                    document.querySelector('.show').classList.remove('show')
                }
            }
            if (e.target.id === 'editInput') {
                document.querySelectorAll('.show').forEach(item => {
                    item.classList.remove('show')
                })
            }
        })
    }


    getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

    addNumber = (type, id) => {
        this.state.showInput 
        ? this.setState({ showInput: false})
        : this.setState({ showInput: true, type: type, id: id})
    }

    addNumberToState = () => {
        let number, ind
        if (document.querySelector('.num') !== null) {
            if (document.querySelector('.num').value > 0) {
                number = document.querySelector('.num').value
            } else {
                number = "..."
            } 
        }

        this.state.contacts.forEach((item, index) => item.id === this.state.id ? ind = index : null)
        this.setState({
            contacts: [
                ...this.state.contacts.slice(0, ind + 1),
                {id: this.getRandomInt(1, 1000), number: number, type: this.state.type},
                ...this.state.contacts.slice(ind + 1, this.state.contacts.length)
            ]
        })
        this.addNumber()
    }

    saveEditedToState = () => {
        let trueID = this.state.selectID.slice(0, this.state.selectID.indexOf('-num'))
        for (let i = 0; i < this.state.contacts.length; i++) {
            if (this.state.contacts[i].id === +trueID) {
                this.setState({
                    contacts: [
                        ...this.state.contacts.slice(0, i),
                        {id: this.state.contacts[i].id, number: document.getElementById('editInput').value, type: this.state.contacts[i].type},
                        ...this.state.contacts.slice(i + 1, this.state.contacts.length + 1)
                    ]
                })
                document.getElementById('editInput').remove()
                document.getElementById(this.state.selectID).children[0].classList.remove("hide")
            }   
        }
    }

    copy = () => {
        let copyText = document.getElementById(this.state.selectID).children[0].innerText
        navigator.clipboard.writeText(copyText)
    }

    edit = () => {
        document.getElementById(this.state.selectID).children[0].classList.add("hide")
        let input = document.createElement('input');
        input.className = "num"
        input.id = "editInput"
        for (let i = 0; i < this.state.contacts.length; i++) {
            `${this.state.contacts[i].id}-num` === this.state.selectID
            ? input.value = `${this.state.contacts[i].number}`
            : console.log(null)
        }
        document.getElementById(this.state.selectID).appendChild(input)
    }

    remove = () => {
        for (let i = 0; i < this.state.contacts.length; i++) {
            if (`${this.state.contacts[i].id}-num` === this.state.selectID) {
                this.setState({
                    contacts: [
                        ...this.state.contacts.slice(0, i),
                        ...this.state.contacts.slice(i + 1, this.state.contacts.length + 1)
                    ]
                })
            }
        }
    }

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
                                    <div>{item.type}:</div> 
                                    <span onClick={() => this.addNumber(item.type, item.id)}>
                                        <i className="fas fa-plus-circle"></i>
                                    </span>
                                    <span id={`${item.id}-num`}>
                                        <div className="contact">{item.number}</div>
                                        <Dropdown 
                                            id={item.id} 
                                            copy={this.copy} 
                                            edit={this.edit} 
                                            remove={this.remove} 
                                            />
                                    </span>
                                </div>
                                {this.state.showInput && this.state.id === item.id && <Input type={this.state.type}/>}
                            </>
                        ))}
                    </div>
                    <h2>Примечание:</h2>
                    <div className="adds">
                        <p> {/*  contentEditable="true" */}
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Sidebar;