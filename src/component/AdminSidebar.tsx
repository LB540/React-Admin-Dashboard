import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiCoupon3Fill,
} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link, useLocation, Location } from "react-router-dom";
import { IconType } from "react-icons";
import {
  FaChartBar,
  FaChartPie,
  FaChartLine,
  FaStopwatch,
  FaGamepad,
} from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo.</h2>
      <DivOne location={location} />
      <DivTwo location={location} />
      <DivThree location={location} />
    </aside>
  );
};

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        location={location}
        text="Dashboard"
        Icon={RiDashboardFill}
      />
      <Li
        url="/admin/product"
        location={location}
        text="Product"
        Icon={RiShoppingBag3Fill}
      />
      <Li
        url="/admin/customer"
        location={location}
        text="Customer"
        Icon={IoIosPeople}
      />
      <Li
        url="/admin/transaction"
        location={location}
        text="Transaction"
        Icon={AiFillFileText}
      />
    </ul>
  </div>
);

const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url="/admin/chart/bar"
        location={location}
        text="Bar"
        Icon={FaChartBar}
      />
      <Li
        url="/admin/chart/pie"
        location={location}
        text="Pie"
        Icon={FaChartPie}
      />
      <Li
        url="/admin/chart/line"
        location={location}
        text="Line"
        Icon={FaChartLine}
      />
    </ul>
  </div>
);

const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/admin/app/stopwatch"
        location={location}
        text="Stopwatch"
        Icon={FaStopwatch}
      />
      <Li
        url="/admin/app/coupon"
        location={location}
        text="Coupon"
        Icon={RiCoupon3Fill}
      />
      <Li
        url="/admin/app/Toss"
        location={location}
        text="Toss"
        Icon={FaGamepad}
      />
    </ul>
  </div>
);

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
      to={url}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
// const data = [
//   {
//     url: "/admin/dashboard",
//     text: "Dashboard",
//     Icon: RiDashboardFill,
//   },
//   {
//     url: "/admin/product",
//     text: "Product",
//     Icon: RiShoppingBag3Fill,
//   },
//   {
//     url: "/admin/customer",
//     text: "Customer",
//     Icon: IoIosPeople,
//   },
//   {
//     url: "/admin/transaction",
//     text: "Transaction",
//     Icon: AiFillFileText,
//   },
// ];

{
  /* {data.map((item, index) => (
            <li
              style={{
                backgroundColor: location.pathname.includes("/admin/dashboard")
                  ? "rgba(0,155,255,0.1)"
                  : "white",
              }}
              key={index}
            >
              <Link to={item.url}>
                <item.Icon />
                {item.text}
              </Link>
            </li>
          ))} */
}
