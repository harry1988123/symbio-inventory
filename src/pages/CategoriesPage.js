import React from "react";
import { selectedCategoryList, selectedItems } from "../features/itemsSlice";
import { useSelector } from "react-redux";
import { PageHeader, List, Card, Image, Divider } from "antd";

const CategoriesPage = () => {
  const items = useSelector(selectedItems);
  const categories = useSelector(selectedCategoryList);

  return (
    <div>
      <div></div>
      <PageHeader
        className="site-page-header"
        title={`${items.length} Items found in Inventory`}
      />
      <List
        grid={{ gutter: 10, column: 4 }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        size="large"
        dataSource={categories}
        renderItem={(item) => (
          <List.Item>
            <Card title={item} style={{ width: 300 }}>
              {items
                .filter((pro) => pro.category.includes(item))
                ?.map((pro2) => {
                  return (
                    <li>
                      {pro2.productName}
                      &nbsp;&nbsp;
                      <Image src={pro2.imageUrl} size="large" width={30} />
                      <Divider />
                    </li>
                  );
                })}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CategoriesPage;
