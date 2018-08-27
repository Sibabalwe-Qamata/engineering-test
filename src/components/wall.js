import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import { List, ListItem, ListItemAction,ListItemContent, Icon, Button, FABButton} from 'react-mdl';
import 'react-tabs/style/react-tabs.css';

class Wall extends Component{
    // constructor(props) {
    //     super(props)
    //     this.state = { activeTab: 2 };

    //          }

    constructor() {
        super();
        this.state = { tabIndex: 0 };
      }

        render()
        {

            const displayTab = (

                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                  <Tab>Overall</Tab>
                  <Tab>Feb</Tab>
                  <Tab>March</Tab>
                  <Tab>April</Tab>
                </TabList>
                <TabPanel>
                    Top High 5s this Month

                    
                    <List style={{width: '650px'}}>
                    <hr/>
                    <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad.">Bryan Cranston</ListItemContent>
                        <ListItemAction>
                       
                        </ListItemAction>
                    </ListItem>
                    <hr/>
                    <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.">Aaron Paul</ListItemContent>
                        <ListItemAction>
                       
                        </ListItemAction>
                    </ListItem>
                    <hr/>
                    <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
                        <ListItemAction>
                     
                        </ListItemAction>
                    </ListItem>
                    <hr/>
                </List>
                </TabPanel>
                <TabPanel>
                <List style={{width: '650px'}}>
                Top High 5s this Month
                <hr/>

                    <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad.">Bryan Cranston</ListItemContent>
                        <FABButton colored>
                        <i className="fas fa-hand-paper"></i>
                        </FABButton>
                        <Button raised colored>Give a High 5</Button>
                    </ListItem>
                    <hr/>
                    <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad.">Aaron Paul</ListItemContent>
                        <FABButton colored>
                        <i className="fas fa-hand-paper"></i>
                        </FABButton>
                        <Button raised colored>Give a High 5</Button>
                    </ListItem>
                    <hr/>
                    <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad.">Bob Odenkirk</ListItemContent>
                        <FABButton colored>
                        <i className="fas fa-hand-paper"></i>
                        </FABButton>
                        <Button raised colored>Give a High 5</Button>
                    </ListItem>
                    <hr/>
                </List>
                </TabPanel>
                <TabPanel>
                <List style={{width: '650px'}}>
                Top High 5s this Month
                <hr/>

                <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad.">Bryan Cranston</ListItemContent>
                        <FABButton colored>
                        <i className="fas fa-hand-paper"></i>
                        </FABButton>
                        <Button raised colored>Give a High 5</Button>
                    </ListItem>
                    <hr/>
                    <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad.">Aaron Paul</ListItemContent>
                        <FABButton colored>
                        <i className="fas fa-hand-paper"></i>
                        </FABButton>
                        <Button raised colored>Give a High 5</Button>
                    </ListItem>
                    <hr/>
                    <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad.">Bob Odenkirk</ListItemContent>
                        <FABButton colored>
                        <i className="fas fa-hand-paper"></i>
                        </FABButton>
                        <Button raised colored>Give a High 5</Button>
                    </ListItem>
                    <hr/>
                </List>
                </TabPanel>

                  <TabPanel>
                <List style={{width: '650px'}}>
                Top High 5s this 
                <hr/>
                
                <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad.">Bryan Cranston</ListItemContent>
                        <FABButton colored>
                        <i className="fas fa-hand-paper"></i>
                        </FABButton>
                        <Button raised colored>Give a High 5</Button>
                    </ListItem>
                    <hr/>
                    <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad.">Aaron Paul</ListItemContent>
                        <FABButton colored>
                        <i className="fas fa-hand-paper"></i>
                        </FABButton>
                        <Button raised colored>Give a High 5</Button>
                    </ListItem>
                    <hr/>
                    <ListItem threeLine>
                        <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad.">Bob Odenkirk</ListItemContent>
                        <FABButton colored>
                        <i className="fas fa-hand-paper"></i>
                        </FABButton>
                        <Button raised colored>Give a High 5</Button>
                    </ListItem>
                    <hr/>
                </List>
                </TabPanel>

                <Button raised colored>Create a new High 5</Button>
              </Tabs>
        
            );
            return (
                displayTab 
            )
        }
}

export default Wall;