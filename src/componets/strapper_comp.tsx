import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css';

interface BreadcrumbProps {
    array: string[];
}

function Breadcumprel({ array }: BreadcrumbProps) {
    return (
        <CBreadcrumb >
            {array.map((element, index) => (
                <CBreadcrumbItem
                    key={index}
                    href={index < array.length - 1 ? "#": undefined}
                    active={index === array.length - 1}
                >
                    {element}
                </CBreadcrumbItem>
            ))}
        </CBreadcrumb>
    );
}

export default Breadcumprel;
