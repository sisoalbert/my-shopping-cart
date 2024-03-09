import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useCartModal = () => {
  const searchParams = useSearchParams();
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    const showCart = searchParams.get("showCart") === "true";
    setShowCartModal(showCart);
    // deleteSearchParam();
  }, [searchParams]);

  const toggleCartModal = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("showCart", (!showCartModal).toString());
    const url = `${window.location.pathname}?${newSearchParams.toString()}`;
    window.history.pushState({}, "", url);
  };
  const deleteSearchParam = () => {
    // setShowCartModal((prevState) => !prevState);

    // Remove the showCart parameter from the URL
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("showCart");
    const url = `${window.location.pathname}?${newSearchParams.toString()}`;
    window.history.replaceState({}, "", url);
  };

  return { showCartModal, toggleCartModal, deleteSearchParam };
};
