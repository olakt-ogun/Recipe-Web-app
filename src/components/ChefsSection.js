import ChefCard from "./ChefCard"

export default function ChefsSection(){
    const chefs = [
        {name:"Juan Carlos", img:"/img/top-chiefs/img_1.jpg", recipescount:"10", cuisine:"Mexican"},
        {name:"John Doe", img:"/img/top-chiefs/img_2.jpg" ,recipescount:"05", cuisine:"Japanese"},
        {name:"Erich Maria", img:"/img/top-chiefs/img_3.jpg", recipescount:"13", cuisine:"Italian"},
        {name:"Chris brown", img:"/img/top-chiefs/img_4.jpg", recipescount:"08", cuisine:"American"},
        {name:"Blake Austin ", img:"/img/top-chiefs/img_5.jpg", recipescount:"09", cuisine:"French"},
        {name:"Ben Gus", img:"/img/top-chiefs/img_6.jpg", recipescount:"05", cuisine:"Indian"}
    ]
    return(
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
                {/* <chefCard />
                <chefCard />
                <chefCard />
                <chefCard />
                <chefCard />
                <chefCard /> */}
                {chefs.map( chef => <ChefCard key={chef.name} chef={chef} />)}
            </div>
        </div>
    )
}