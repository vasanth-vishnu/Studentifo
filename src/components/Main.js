import { Card } from "@material-ui/core"
import BlogCard from './Blog';
import Link from '@material-ui/core/Link';

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
                <div style={{border:'1px solid grey'}}>
                   <BlogCard/>
                </div>
                <div style={{border:'1px solid grey',marginTop:'20px'}}>
                   <BlogCard/>
                </div>
            </div>
            <div className="allblog" style={{textDecoration:'none',color:'#10AFA6',textAlign:'right',marginTop:'30px'}}>
                    <Link to="#" style={{fontSize:'20px',color:'#10AFA6'}}>allBlogs</Link>
                </div>
            
            <div className="aboutResume">
            <h2 style={{color:'#10AFA6'}}>ResumeTemplate</h2>
            <p style={{fontSize:'20px',fontWeight:'400'}}>SnippetBook will help you to store some code snippets which you feel important and mainly focuses on
                    <span style={{color:'#10AFA6'}}>Storing IMP code snippets of any language</span>
                    and gothrough the instructions mentioned below and act accordingly to perform your activities
                    this also displays blogs of different users and this is one way to spread and gain knowledge
                </p>
            </div>
            <hr/>
            <div className="aboutsnippet">
            <h2 style={{color:'#10AFA6'}}>AboutSnippetBook</h2>
            <p style={{fontSize:'20px',fontWeight:'400'}}>SnippetBook will help you to store some code snippets which you feel important and mainly focuses on
                    <span style={{color:'#10AFA6'}}>Storing IMP code snippets of any language</span>
                    and gothrough the instructions mentioned below and act accordingly to perform your activities
                    this also displays blogs of different users and this is one way to spread and gain knowledge
                </p>
            </div>
        </div>
    );
}
 
export default Main;