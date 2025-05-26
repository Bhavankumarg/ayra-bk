import { HoverButton, HoverButton2, HoverButton3, HoverButton4, HoverButton5, HoverButton6, HoverButton7 } from '../utils/HoverButton';
import BookHover from '../components/BookHover';
import FoldOnHoverHorizontal from '../components/Flip';
import React from 'react'

const page = () => {

    return (
        <>
            <div className="flex flex-col justify-center items-center px-7 w-full">
                <div className="container">
                    <h1 className="2xl:text-[44px] xl:text-[34px] lg:text-[24px] md:text-[20px] text-[16px] font-semibold w-full">Ayra faculty don&apos;t disappear after lectures—they stay engaged, offering guidance on:</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id tempor nisi. In hac habitasse platea dictumst. Quisque eu semper diam, id bibendum metus. Morbi bibendum auctor lorem, ut venenatis sem lacinia vitae. Aliquam dictum vehicula turpis, ut bibendum mi interdum vitae. Cras venenatis fermentum purus quis congue. Curabitur sollicitudin ex in velit dapibus interdum.</p>
                    <p>Curabitur scelerisque ligula felis. In hac habitasse platea dictumst. In dictum euismod odio at pharetra. Donec et vulputate velit. Nulla scelerisque, eros id placerat lobortis, dolor dui auctor lacus, ut hendrerit massa diam vel erat. Etiam eget suscipit felis. Nunc justo sem, ullamcorper quis varius at, efficitur a tortor. Cras commodo, sapien eu dignissim aliquet, leo elit faucibus justo, quis lobortis felis libero eget dui. Nullam sit amet lorem ante. Ut ac consequat nunc, in sodales ligula. Cras non enim euismod, pulvinar risus et, mollis velit.</p>
                    <p>Proin accumsan nunc ac enim feugiat, id mollis lorem suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis velit, tincidunt sodales lectus ut, ultricies scelerisque augue. Integer hendrerit ipsum lectus, non mattis tellus porta quis. Nam vitae suscipit magna, ac vehicula libero. Maecenas varius ornare hendrerit. Nulla porttitor aliquam quam, non finibus est cursus iaculis. Vivamus rutrum convallis nisl quis iaculis. Nam leo ex, dapibus vel erat rutrum, maximus consequat leo. Vivamus pellentesque, metus sit amet rhoncus iaculis, dolor purus dapibus sapien, nec maximus turpis quam ultrices augue. Aliquam elit nunc, interdum sed massa eget, ullamcorper gravida erat. Proin sed lacus id orci finibus semper sed nec quam. Sed quis lacus nunc. Morbi volutpat, tortor et feugiat cursus, lacus ipsum mollis purus, vitae efficitur ligula nunc quis arcu. Quisque id ornare dui, quis convallis orci. Morbi lacinia sodales elementum.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin congue non mi sit amet consequat. Vivamus tempus fermentum metus, vel congue quam lacinia vel. Proin accumsan dignissim vulputate. Mauris ut mattis felis. Nulla pharetra, purus vitae ornare pellentesque, sem purus cursus dui, id porttitor lacus lacus maximus tellus. Maecenas ullamcorper mi sit amet lorem accumsan tristique at et ipsum. Aenean malesuada aliquet arcu, et rutrum dolor sodales vitae. Morbi vehicula enim at odio accumsan ultrices.</p>
                    <p>Sed placerat id urna ac tincidunt. Nunc dapibus pretium tristique. Sed suscipit arcu sit amet mattis rutrum. Proin euismod consectetur augue. Integer erat ligula, mollis quis velit iaculis, rutrum mattis mauris. In vel efficitur risus. Duis in velit id lectus dapibus sagittis a quis orci. Sed ornare, ante nec condimentum elementum, tellus dui volutpat risus, a bibendum libero odio vitae velit. Aliquam tristique pellentesque enim, sed aliquam erat laoreet non.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id tempor nisi. In hac habitasse platea dictumst. Quisque eu semper diam, id bibendum metus. Morbi bibendum auctor lorem, ut venenatis sem lacinia vitae. Aliquam dictum vehicula turpis, ut bibendum mi interdum vitae. Cras venenatis fermentum purus quis congue. Curabitur sollicitudin ex in velit dapibus interdum.</p>
                    <p>Curabitur scelerisque ligula felis. In hac habitasse platea dictumst. In dictum euismod odio at pharetra. Donec et vulputate velit. Nulla scelerisque, eros id placerat lobortis, dolor dui auctor lacus, ut hendrerit massa diam vel erat. Etiam eget suscipit felis. Nunc justo sem, ullamcorper quis varius at, efficitur a tortor. Cras commodo, sapien eu dignissim aliquet, leo elit faucibus justo, quis lobortis felis libero eget dui. Nullam sit amet lorem ante. Ut ac consequat nunc, in sodales ligula. Cras non enim euismod, pulvinar risus et, mollis velit.</p>
                    <p>Proin accumsan nunc ac enim feugiat, id mollis lorem suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis velit, tincidunt sodales lectus ut, ultricies scelerisque augue. Integer hendrerit ipsum lectus, non mattis tellus porta quis. Nam vitae suscipit magna, ac vehicula libero. Maecenas varius ornare hendrerit. Nulla porttitor aliquam quam, non finibus est cursus iaculis. Vivamus rutrum convallis nisl quis iaculis. Nam leo ex, dapibus vel erat rutrum, maximus consequat leo. Vivamus pellentesque, metus sit amet rhoncus iaculis, dolor purus dapibus sapien, nec maximus turpis quam ultrices augue. Aliquam elit nunc, interdum sed massa eget, ullamcorper gravida erat. Proin sed lacus id orci finibus semper sed nec quam. Sed quis lacus nunc. Morbi volutpat, tortor et feugiat cursus, lacus ipsum mollis purus, vitae efficitur ligula nunc quis arcu. Quisque id ornare dui, quis convallis orci. Morbi lacinia sodales elementum.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin congue non mi sit amet consequat. Vivamus tempus fermentum metus, vel congue quam lacinia vel. Proin accumsan dignissim vulputate. Mauris ut mattis felis. Nulla pharetra, purus vitae ornare pellentesque, sem purus cursus dui, id porttitor lacus lacus maximus tellus. Maecenas ullamcorper mi sit amet lorem accumsan tristique at et ipsum. Aenean malesuada aliquet arcu, et rutrum dolor sodales vitae. Morbi vehicula enim at odio accumsan ultrices.</p>
                    <p>Sed placerat id urna ac tincidunt. Nunc dapibus pretium tristique. Sed suscipit arcu sit amet mattis rutrum. Proin euismod consectetur augue. Integer erat ligula, mollis quis velit iaculis, rutrum mattis mauris. In vel efficitur risus. Duis in velit id lectus dapibus sagittis a quis orci. Sed ornare, ante nec condimentum elementum, tellus dui volutpat risus, a bibendum libero odio vitae velit. Aliquam tristique pellentesque enim, sed aliquam erat laoreet non.</p>
                </div>

                <div className="space-y-4 my-8">
                    <HoverButton text="Learn More" />
                    <HoverButton2 text="Get Started" />
                    <HoverButton3 text="Click Here" />
                    <HoverButton4 text="Orange Button" />
                    <HoverButton5 text="Light Blue Button" />
                    <HoverButton6 text="White Button" />
                    <HoverButton7 text="Transparent Button" />
                </div>
                <BookHover />
                <FoldOnHoverHorizontal />
            </div>
        </>
    );
}

export default page
