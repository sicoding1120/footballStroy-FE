
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
const BreadcrumbsElement = ({root}: {root:any}) => {
  return (
    <Breadcrumbs className="text-sm">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>{root}</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default BreadcrumbsElement;
