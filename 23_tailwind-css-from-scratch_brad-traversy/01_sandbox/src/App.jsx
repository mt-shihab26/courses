// const App = () => {
//     return (
//         <div className="bg-blue-800 max-h-full">
//             <div className="container bg-gray-50 h-full p-6 max-w-lg">
//                 <h1 className="text-3xl text-blue-800">Tailwind CSS Sandbox</h1>
//                 <ul className="mt-6">
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="01.utility_first"
//                         >
//                             Utility First Example
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="02.colors"
//                         >
//                             Colors
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="03.container_and_spacing"
//                         >
//                             Container &amp; Spacing
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="04.typography"
//                         >
//                             Typography
//                         </a>
//                     </li>
//                     <li className=" text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="05.sizing"
//                         >
//                             Sizing
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="06.layout_and_position"
//                         >
//                             Layout &amp; Position
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="07.backgrounds_and_shadows"
//                         >
//                             Backgrounds &amp; Shadows
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="08.borders"
//                         >
//                             Borders &amp; Border Radius
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="09.filters"
//                         >
//                             Filters
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="10.interactivity"
//                         >
//                             Interactivity
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="11.breakpoints"
//                         >
//                             Breakpoints
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="12.columns_layouts"
//                         >
//                             Column Layouts
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="13.flexbox"
//                         >
//                             Flexbox
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="14.grid"
//                         >
//                             Grid
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="15.transform_and_transition"
//                         >
//                             Transform &amp; Transitions
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="16.animation"
//                         >
//                             Animation
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="17.customization_and_config"
//                         >
//                             Customization &amp; Config
//                         </a>
//                     </li>
//                     <li className="text-lg border border-blue-200 p-2 my-4">
//                         <a
//                             className="text-blue-500 hover:text-blue-300"
//                             href="18.dark_mode"
//                         >
//                             Dark Mode
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

import UtilityFirst from "./pages/01UtilityFirst.jsx";
import Colors from "./pages/02Colors.jsx";
import Borders from "./pages/08Borders.jsx";
import Filters from "./pages/09Filters.jsx";
import Breakpoints from "./pages/11Breakpoints.jsx";
import ColumnsLayouts from "./pages/12ColumnsLayouts.jsx";
import Grid from "./pages/14Grid.jsx";
import Animation from "./pages/16Animation.jsx";
import CustomizationAndConfig from "./pages/17CustomizationAndConfig.jsx";
import DarkMode from "./pages/18DarkMode.jsx";

const App = () => {
    return (
        <>
            {/* <UtilityFirst /> */}
            {/* <Colors /> */}
            {/* <Borders /> */}
            {/* <Filters /> */}
            {/* <Breakpoints /> */}
            {/* <ColumnsLayouts /> */}
            {/* <Grid /> */}
            {/* <Animation /> */}
            {/* <CustomizationAndConfig /> */}
            <DarkMode />
        </>
    );
};

export default App;
