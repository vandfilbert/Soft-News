import React, { Component }  from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        let curretNews = this;
        fetch("/v2/everything?q=bitcoin&from=2020-04-23&sortBy=publishedAt&apiKey=3f8cfbece7ec4ef3a90057785a82e55a")
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('There is a problem. Status Code: ' + response.status);
                    return;
                }
                response.json().then(d => {
                    //console.log(d.articles);
                    curretNews.setState({
                        articles: d.articles
                    });
                });
            }).catch(function (err) {
                console.log('Fetch Error: ', err);
            });
    }
    render(){
    //console.log(this.state);
    return ( 
        <div class="container news">
            {this.state.articles.map((item)=>
            <Card className="cardNews">
                <CardImg top width="100%" src={item.urlToImage} alt="Soft News" />
                <CardBody>
                    <CardTitle><h5>{item.title}</h5></CardTitle>
                    <CardSubtitle><b>Author: {item.author}</b></CardSubtitle>
                    <CardText>{item.description}</CardText>
                    <a className="btn btn-primary" href={item.url}>Read More</a>
                </CardBody>
            </Card>
            )}
        </div>
    );
    }
};

export default News;