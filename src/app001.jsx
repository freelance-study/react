var Content = React.createClass({
    render: function(){
        return(
            <div className="container">
                <h1>勉強会メンバー一覧</h1>
                <ul className="list">
                    <li>
                        <h2 className="authorName">あああああ</h2>
                    </li>
                </ul>
            </div>
        )
    }
});

ReactDOM.render(
    <Content />,
    document.getElementById('app')
);