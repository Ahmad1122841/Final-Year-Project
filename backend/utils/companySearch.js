import { companyData } from "../data/companyData.js";

  export function searchCompanyData(query) {
  if (!query || typeof query !== "string") return "";

  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(" ");
  let relevantInfo = [];

  // Search Products using keyword matching
  companyData.products.forEach((product) => {
    const searchableText = `
      ${product.name}
      ${product.category}
      ${product.description}
      ${product.features?.join(" ")}
      ${product.price}
      ${product.sizes?.join(" ")}
    `.toLowerCase();

    const isMatch = queryWords.some((word) =>
      searchableText.includes(word)
    );

    if (isMatch) {
      relevantInfo.push(
        `Product: ${product.name}
Category: ${product.category}
Description: ${product.description}
Price: ${product.price}
Sizes: ${product.sizes?.join(", ") || "N/A"}
Features: ${product.features?.join(", ")}
Stock: ${product.stock}`
      );
    }
  });

  // Contact
  if (
    queryLower.includes("contact") ||
    queryLower.includes("support") ||
    queryLower.includes("email") ||
    queryLower.includes("phone")
  ) {
    relevantInfo.push(
      `Contact Information:
Phone: ${companyData.contact.phone}
Email: ${companyData.contact.email}
Hours: ${companyData.contact.hours}`
    );
  }

  // Shipping
  if (
    queryLower.includes("shipping") ||
    queryLower.includes("delivery")
  ) {
    relevantInfo.push(
      `Shipping Details:
Standard Delivery: ${companyData.shipping.standardDelivery}
Express Delivery: ${companyData.shipping.expressDelivery}
Free Shipping: ${companyData.shipping.freeShipping}`
    );
  }

  // Returns
  if (
    queryLower.includes("return") ||
    queryLower.includes("refund")
  ) {
    relevantInfo.push(
      `Return Policy:
Duration: ${companyData.returnPolicy.duration}
Condition: ${companyData.returnPolicy.condition}
Refund Time: ${companyData.returnPolicy.refundTime}`
    );
  }

  return relevantInfo.join("\n\n"); // return empty string if nothing found
}