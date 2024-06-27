import officeBackgroud from "@/public/images/New-Office.jpg";
import Image from "next/image";
import DecoratedTitle from "../_components/decorated-title";

export default function Material() {
  
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} priority={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">Our Awesome Content</h1>
      </div>
      <div id="about" className="lg:w-[60%]">
        <DecoratedTitle title="30 min to Prosperity" />
      
        <div className="flex flex-col justify-center">
          <div>
              <p className="">Nullam ut felis eu orci rutrum ultrices non a quam. Mauris lobortis, lectus sed tincidunt faucibus, quam neque blandit nisl, a mollis dui leo interdum magna. Sed ut pellentesque ex. In consequat, erat at dictum eleifend, dui nisi mollis orci, quis luctus ligula ante sit amet lectus. Phasellus ullamcorper a nisl et tempus. Maecenas sed molestie magna. Curabitur mollis turpis vitae risus porta mollis. Curabitur nec rutrum enim. Etiam finibus feugiat enim vel aliquet. Etiam bibendum posuere erat, ut fringilla velit rhoncus a.</p>
              <p className="">Sed eget consectetur urna. Pellentesque semper orci viverra feugiat varius. Sed pulvinar lacus eu ante vestibulum, vel porttitor mauris finibus. Curabitur id ante elementum, varius odio quis, sollicitudin quam. Fusce purus diam, dapibus in ante id, dapibus eleifend orci. Nam ultrices luctus leo et interdum. Praesent enim orci, mollis faucibus dictum nec, molestie sit amet augue. Nam interdum laoreet mattis.</p>
              <p className="">Praesent leo ex, hendrerit suscipit arcu a, ornare laoreet ante. Fusce interdum gravida elit lacinia semper. Nullam lobortis molestie vestibulum. Donec vitae diam mauris. Nam imperdiet quam ac nulla suscipit, ac pulvinar nisi scelerisque. Suspendisse potenti. Morbi vitae mollis metus. Sed ac eleifend nibh. Sed suscipit posuere rutrum. Ut posuere id diam et malesuada. Maecenas diam nisl, consectetur eget laoreet at, ultrices sit amet velit. Vivamus congue molestie purus, non porta lacus facilisis nec. Donec non elit congue, accumsan sem sit amet, placerat purus. Vivamus ac placerat tellus. Donec risus risus, dictum vel dapibus vel, tempor quis enim.</p>
              <p className="">Vivamus sed tincidunt metus. Etiam venenatis volutpat mi sit amet commodo. Nullam porta metus ac tincidunt dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sem purus, ultrices at egestas in, pulvinar at sapien. Nam vehicula venenatis consectetur. In hac habitasse platea dictumst. Maecenas sodales interdum lectus, vitae laoreet felis imperdiet et. Pellentesque vel mi nec risus rhoncus venenatis. Ut auctor magna nec mi lobortis tempus. Quisque pulvinar pellentesque varius. Fusce vel commodo ex. Mauris a lacinia nibh.</p>
          </div>
        </div>  
      </div>
    </div>  
  );
}
