import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, Image, Dimensions } from "react-native";
import { Carouselstyles } from "../Stylws/Compoments/Carousel.styles";

const { width } = Dimensions.get("window");

const images = [
  "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbDkjtYwEXRwlny4zg-F2KJRD4uw3sRgalQ&s",
  "https://gphome.gumlet.io/promotions/swiggy-new-user-offer.png?w=600&dpr=2.6",
];

const Carousel = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll mỗi 5s (30s quá dài)
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={Carouselstyles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <View style={Carouselstyles.imageWrapper}>
            <Image source={{ uri: item }} style={Carouselstyles.image} />
          </View>
        )}
      />

      {/* Dots */}
      <View style={Carouselstyles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              Carouselstyles.dot,
              index === currentIndex && Carouselstyles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
