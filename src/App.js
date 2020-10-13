import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import Target from './DraggableItemsStorage/Target';
import Card from './Card';
import HTML5Backend from 'react-dnd-html5-backend'
import {
  DragDropContext
} from 'react-dnd'
import ItemContainer from './DraggableItemsStorage/ItemsContainer';
import TableComponent from './DraggableItemsStorage/tableComponent';
import Content from './DraggableItemsStorage/ContentComponent'
const update = require('immutability-helper');

class App extends Component {
  state = {
    items: [{
        id: 1,
        name: 'Item 1'
      },
      {
        id: 2,
        name: 'Item 2'
      },
      {
        id: 3,
        name: 'Item 3'
      },
      {
        id: 4,
        name: 'Item 4'
      },
    ],
    cards: [{
        id: 1,
        text: 'Write a cool JS library',
      },
      {
        id: 2,
        text: 'Make it generic enough',
      },
      {
        id: 3,
        text: 'Write README',
      },
      {
        id: 4,
        text: 'Create some examples',
      },
      {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      },
      {
        id: 6,
        text: '???',
      },
      {
        id: 7,
        text: 'PROFIT',
      },
    ],

    company: [{
        id: 0,
        name: "col1"
      }, {
        id: 1,
        name: " "
      },
      {
        id: 2,
        name: " "
      },
      {
        id: 3,
        name: " "
      },
      {
        id: 4,
        name: " Hiiii"
      }
    ],

    contact: [{
        id: 0,
        name: "col2"
      }, {
        id: 1,
        name: " "
      },
      {
        id: 2,
        name: " "
      },
      {
        id: 3,
        name: " "
      },
      {
        id: 4,
        name: " "
      }
    ],

    country: [{
        id: 0,
        name: "col3"
      }, {
        id: 1,
        name: " "
      },
      {
        id: 2,
        name: " "
      },
      {
        id: 3,
        name: " "
      },
      {
        id: 4,
        name: " "
      }
    ]

  }



  moveCard = (dragIndex, hoverIndex) => {
    const {
      cards
    } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ],
        },
      }),
    )
  }

  AddItem = (item, content_name, idPlace) => {

    if (content_name === "company") {
      this.setState({
        company: [...this.state.company.slice(0, idPlace), {
          id: idPlace,
          name: item.name
        }, ...this.state.company.slice(idPlace + 1)]
      })
    } else if (content_name === "contact") {
      this.setState({
        contact: [...this.state.contact.slice(0, idPlace), {
          id: idPlace,
          name: item.name
        }, ...this.state.contact.slice(idPlace + 1)]
      })
    } else if (content_name === "country") {
      this.setState({
        country: [...this.state.country.slice(0, idPlace), {
          id: idPlace,
          name: item.name
        }, ...this.state.country.slice(idPlace + 1)]
      })
    }
  }

  deleteItem = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      }
    })
  }

  render() {
      return (
         <div className = "App" >
          <header className = "App-header" >
          < img src = {
            logo
          }
          className = "App-logo"
          alt = "logo" />
          <h1 className = "App-title" > Welcome to React </h1> </header > 
          <div className = "App-intro" >
          <div className = "app-container" >
          <div className = "item-container" >

            {/* List Items code */}
          <ItemContainer / >
          </div> {
          /* ----------------------------------Modified -------------------------------------*/
        } 
        <Target >
        <div className = "table" >
        <TableComponent content_name = "company"
      values = {
        this.state.company
      }
      handleAdd = {
        this.AddItem
      }
      /> <TableComponent content_name = "contact"
      values = {
        this.state.contact
      }
      handleAdd = {
        this.AddItem
      }
      /> <TableComponent content_name = "country"
      values = {
        this.state.country
      }
      handleAdd = {
        this.AddItem
      }
      /> </div >
       </Target> {
      /* ----------------------------------Ended -------------------------------------*/
    } 
    </div> 
    <div className = "card-container" > {
      this.state.cards.map((card, i) => ( <
        Card key = {
          card.id
        }
        index = {
          i
        }
        id = {
          card.id
        }
        text = {
          card.text
        }
        moveCard = {
          this.moveCard
        }
        />
      ))
    }
     </div>
   </div>
   </div>
);
}
}

export default DragDropContext(HTML5Backend)(App);