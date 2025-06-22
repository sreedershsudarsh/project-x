import "./index.css";
import { Card } from "../../commonComponent/common-Card";
import { AddNew } from "../../commonComponent/common-icon";
import { Footer } from "../../commonComponent/Footer";
import {FormBuilderPage} from "../../commonComponent/common-Form";
import { useEffect, useState } from "react";
import { GetUser } from "./api";
import { PostUser } from "./api";
import { Header } from "./header";
export const Dashboard = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [perData, perSetData] = useState([]);
  const [createData, setCreateData] = useState({});

  const handleAdd = () => {
    setFormOpen((prev) => !prev);
  };
  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    if (createData && Object.keys(createData).length > 0) {
      Postdata(createData);
    }
  }, [createData]);

  const Postdata = (createData) => {
    PostUser(createData);
  };
  const getdata = () => {
    GetUser().then((response) => {
      perSetData(response);
    });
  };

  const width = window.innerWidth;
  const handleAction = (key, id) => {
    if (key === "Edit") {
    } else if (key === "Delete") {
      perSetData((prev) => prev.filter((item) => item.id !== id));
    }
  };
  const fields = [
    { name: "head", placeholder: "Enter heading name", type: "text" },
    { name: "price", placeholder: "Enter price", type: "text" },
    { name: "lord", placeholder: "Enter lord name", type: "text" },
    { name: "days", placeholder: "Enter days", type: "text" },
    { name: "time", placeholder: "Enter time", type: "text" },
  ];
  return (
    <>
      {width < 700 ? undefined : <h1>Poyi mobileil nokku... sry </h1>}

      <div className={`${width > 700 ? "display" : undefined}`}>
        <Header />
        <div className="main">
          {perData.map((detail) => (
            <Card
              id={detail.id}
              head={detail.head}
              price={detail.price}
              lord={detail.lord}
              days={detail.days}
              time={detail.time}
              actiondropdown={[
                { title: "Edit", id: "1" },
                { title: "Delete", id: "2" },
              ]}
              handleAction={handleAction}
            />
          ))}
          <FormBuilderPage
            open={formOpen}
            handleAdd={handleAdd}
            perSetData={setCreateData}
            fields={fields}
            // handleSubmit={handleSubmit}
          />
          <AddNew handleAdd={handleAdd} />
        </div>
        <Footer />
      </div>
    </>
  );
};
