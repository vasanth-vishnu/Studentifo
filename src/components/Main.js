const Main = () => {
    return ( 
        <div className="cont">
            <h2>Welcome to <span style={{color:'#10AFA6'}}>Studentifo</span></h2>
            <hr/>
            <div className="par">
                <p style={{fontSize:'20px',fontWeight:'400'}}>This website is mainly created for the benificial of students and focuses mainly on
                    <span style={{color:'#10AFA6'}}>Resume building,Blog writing and Code snippet storage</span>
                    of any language and gothrough the instructions mentioned below and act accordingly to perform your activities
                    this also displays blogs of different users and this is one way to spread and gain knowledge
                </p>
            </div>
            <div className="blog">
                <h2 style={{color:'#10AFA6'}}>Blogs</h2>
                <div style={{border:'1px solid black'}}>
                    <h4 style={{fontSize:'20px'}}>The D Day !!</h4>
                    <h6>written by <span>T Vasanth</span></h6>
                </div>
            </div>
        </div>
    );
}
 
export default Main;