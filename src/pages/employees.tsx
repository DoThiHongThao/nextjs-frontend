// Ví dụ: pages/employees.tsx trong Next.js
import { Employee } from '@/app/types/employee';
import { GetServerSideProps } from 'next';

interface EmployeeListProps {
  employees: Employee[];
}

export default function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <div>
      <h1>Employee List</h1>
      {employees.map((employee) => (
        <div key={employee.id}>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Age: {employee.age}</p>
          <p>Department: {employee.department}</p>
          <p>Hire Date: {employee.hire_date}</p>
        </div>
      ))}
    </div>
  );
}

// Fetch dữ liệu từ API Flask trên ngrok
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://34.136.165.31/employees');  // Thay bằng URL ngrok của bạn
  const employees: Employee[] = await res.json();

  return {
    props: {
      employees,
    },
  };
};
