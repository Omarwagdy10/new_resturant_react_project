import '../../style/Sections/Section4/Section4.css'
import Btn from '../button/button'

function Section4 (){
    const image = "https://themewagon.github.io/feane/images/about-img.png";
    const main_Data = 'We Are Feane'
    const paragraph = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All'
    return (
      <div className="Section4 ">
        <div className="leftSide">
            <img className=""  src={image} />
        </div>
        <div className="rightSide">
            <h2>{main_Data}</h2>

            <p>{paragraph}</p>

            <Btn styleName={'Sec4_btn'} text={'Read More'}/>
        </div>
      </div>
    );
}

export default Section4;