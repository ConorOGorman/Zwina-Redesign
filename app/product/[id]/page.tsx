import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/shop/ProductDetailClient";
import { getShopProductById } from "@/lib/shop/products";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getShopProductById(params.id);
  if (!product) notFound();

  return (
    <>
      <ProductDetailClient product={product} />
    </>
  );
}
