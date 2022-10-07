import React, { useState, useEffect } from "react";
import { Select, Tag, Input, Card, notification } from "antd";
import "../Styles/AddNewItemPage.css";
import {
  setNewItem,
  setCategories,
  selectedCategoryList,
} from "../features/itemsSlice";
import { useDispatch, useSelector } from "react-redux";

const AddNewItemPage = () => {
  const { Option } = Select;
  const defaultImageUrl = "https://via.placeholder.com/200x200";
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedPricePerUnit, setSelectedPricePerUnit] = useState(0);
  const [selectedImageUrl, setSelectedImageUrl] = useState(defaultImageUrl);
  const dispatch = useDispatch();
  const categories = useSelector(selectedCategoryList);

  useEffect(() => {
    dispatch(setCategories(["Dresses", "Shirts", "Pants", "Accessories"]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeCategory = (value) => {
    setSelectedCategory(value);
  };

  const onChangeProduct = (event) => {
    setSelectedProductName(event.target.value);
  };

  const onChangePrice = (event) => {
    setSelectedPricePerUnit(event.target.value);
  };

  const oncChangeImageUrl = (event) => {
    const imageUrl = event.target.value;
    if (imageUrl) {
      setSelectedImageUrl(imageUrl);
    } else {
      setSelectedImageUrl(defaultImageUrl);
    }
  };

  const createCardTitle = () => {
    return (
      <>
        <div>Selected Categories: {selectedCategory}</div>
        <div>Product Name: {selectedProductName} </div>
      </>
    );
  };
  const createCardDis = () => {
    return (
      <>
        <div>Price Per Unit: ₹{selectedPricePerUnit}</div>
      </>
    );
  };

  const clearForm = () => {
    setSelectedCategory("");
    setSelectedProductName("");
    setSelectedPricePerUnit("");
    setSelectedImageUrl(defaultImageUrl);
  };

  const openNotification = (data) => {
    notification.open({
      message: "Item added successfully",
      description: JSON.stringify(data),
      onClick: () => {
        clearForm();
      },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      category: selectedCategory,
      productName: selectedProductName,
      pricePerUnit: selectedPricePerUnit,
      imageUrl: selectedImageUrl,
    };
    dispatch(setNewItem(data));
    openNotification(data);
    event.target.reset();
  };

  const { Meta } = Card;

  return (
    <div className="NewItemTab">
      <div className="newItem-input">
        <form className="input-width" onSubmit={onSubmit}>
          <h2>Add A New Item</h2>
          <Tag color="blue">Category</Tag>
          <Select
            showSearch
            placeholder="Select a Category"
            optionFilterProp="children"
            onChange={onChangeCategory}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
            className="input-width"
            defaultValue={selectedCategory}
          >
            {categories.map((item, index) => {
              return (
                <Option value={item} key={index}>
                  {item}
                </Option>
              );
            })}
          </Select>
          <Tag color="blue">Product Name</Tag>
          <Input
            placeholder="Enter Product Name"
            onChange={onChangeProduct}
            className="input-width"
            type="String"
            defaultValue={selectedProductName}
          />
          <Tag color="blue">Price per Unit</Tag>
          <Input
            placeholder="Enter Price per Unit"
            onChange={onChangePrice}
            type="Number"
            className="input-width"
            defaultValue={""}
            min="0"
          />
          <Tag color="blue">Image URL</Tag>
          <Input
            placeholder="Past Image URL"
            onChange={oncChangeImageUrl}
            className="input-width"
            defaultValue=""
          />
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="Ima"
              src={selectedImageUrl}
              defaultValue={defaultImageUrl}
            />
          }
          hoverable="true"
        >
          <Meta title={createCardTitle()} description={createCardDis()} />
        </Card>
      </div>
    </div>
  );
};

export default AddNewItemPage;
