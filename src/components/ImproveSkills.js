export default function ImproveSkills(){
    const list = [
        "Learn new recipes",
        "Experiment with food",
        "Write your own recipe",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]

    return(
        <div className="section imporve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve your Culinary Skills</h1>
                {list.map((item,index) =>(
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn">Sign up</button>
            </div>
        </div>
    )
}