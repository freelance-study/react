var Content = React.createClass({
    getProfileData: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                    this.setState({data: data});
                }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.getProfileData();
        setInterval(this.getProfileData, this.props.pollInterval);
    },
    render: function(){
        return(
            <div className="container">
                <h1>勉強会メンバー一覧</h1>
                <Parent data={this.state.data} />
            </div>
        )
    }
});

var Parent = React.createClass({
    render: function(){
        var listNode = this.props.data.map(function(data, i){
            return(
                <Child key={i} author={data.author} profile={data.profile} />
            )
        });
        return(
            <ul className="list">
                {listNode}
            </ul>
        )
    }
});

var Child = React.createClass({
    onClick: function(){
        alert(this.props.profile);
    },
    render: function(){
        return(
            <li onClick={this.onClick}>
                <h2 className="authorName">{this.props.author}</h2>
            </li>
        );
    }
})


ReactDOM.render(
    <Content url='./list.json' pollInterval={2000} />,
    document.getElementById('app')
);