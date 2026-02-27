/**
 * Table Page
 * 
 * Demonstrates the Table component family with various configurations.
 * Based on the "My Advisors" design from Figma.
 */

import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  ResizableTable,
} from '../../components/Table';
import { Button } from '../../components/Button';
import { Download, FileSpreadsheet } from '../icons';

// Sample advisor data
interface Advisor {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  status: string;
  joinDate: string;
  revenue: string;
}

const advisorData: Advisor[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@advisors.com',
    phone: '(555) 123-4567',
    company: 'Strategic Partners',
    location: 'New York, NY',
    status: 'Active',
    joinDate: '2023-01-15',
    revenue: '$125,000',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.c@advisors.com',
    phone: '(555) 234-5678',
    company: 'Capital Ventures',
    location: 'San Francisco, CA',
    status: 'Active',
    joinDate: '2023-03-22',
    revenue: '$98,500',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.r@advisors.com',
    phone: '(555) 345-6789',
    company: 'Growth Advisors',
    location: 'Austin, TX',
    status: 'Active',
    joinDate: '2023-02-10',
    revenue: '$156,000',
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.k@advisors.com',
    phone: '(555) 456-7890',
    company: 'Innovation Group',
    location: 'Seattle, WA',
    status: 'Active',
    joinDate: '2023-04-05',
    revenue: '$87,200',
  },
  {
    id: '5',
    name: 'Jessica Taylor',
    email: 'jessica.t@advisors.com',
    phone: '(555) 567-8901',
    company: 'Market Leaders',
    location: 'Chicago, IL',
    status: 'Active',
    joinDate: '2023-01-30',
    revenue: '$142,800',
  },
  {
    id: '6',
    name: 'Robert Martinez',
    email: 'robert.m@advisors.com',
    phone: '(555) 678-9012',
    company: 'Elite Consulting',
    location: 'Boston, MA',
    status: 'Active',
    joinDate: '2023-05-18',
    revenue: '$109,300',
  },
  {
    id: '7',
    name: 'Amanda White',
    email: 'amanda.w@advisors.com',
    phone: '(555) 789-0123',
    company: 'Premier Partners',
    location: 'Denver, CO',
    status: 'Active',
    joinDate: '2023-03-12',
    revenue: '$93,600',
  },
  {
    id: '8',
    name: 'Christopher Lee',
    email: 'chris.l@advisors.com',
    phone: '(555) 890-1234',
    company: 'Apex Advisors',
    location: 'Atlanta, GA',
    status: 'Active',
    joinDate: '2023-02-28',
    revenue: '$118,900',
  },
  {
    id: '9',
    name: 'Nicole Brown',
    email: 'nicole.b@advisors.com',
    phone: '(555) 901-2345',
    company: 'Pinnacle Group',
    location: 'Miami, FL',
    status: 'Active',
    joinDate: '2023-04-20',
    revenue: '$134,500',
  },
  {
    id: '10',
    name: 'James Wilson',
    email: 'james.w@advisors.com',
    phone: '(555) 012-3456',
    company: 'Summit Advisors',
    location: 'Phoenix, AZ',
    status: 'Active',
    joinDate: '2023-05-05',
    revenue: '$101,700',
  },
];

export function TablePage() {
  const [columnWidths, setColumnWidths] = React.useState({
    0: 150, // Name
    1: 180, // Email
    2: 140, // Phone
    3: 150, // Company
    4: 140, // Location
    5: 100, // Status
    6: 120, // Join Date
    7: 130, // Revenue
  });

  const handleColumnWidthChange = (widths: any) => {
    setColumnWidths(widths);
  };

  const handleExportToExcel = () => {
    console.log('Exporting to Excel...');
    // Implementation would go here
  };

  const handleDownload = () => {
    console.log('Downloading...');
    // Implementation would go here
  };

  return (
    <div style={{ padding: '24px', paddingBottom: '48px' }}>
      {/* Header Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 'var(--font-size-h4, 24px)',
            fontWeight: 600,
            fontFamily: 'var(--fontfamily-body, system-ui, -apple-system, sans-serif)',
            lineHeight: '1.3',
            color: 'var(--text-primary, #000000)',
          }}
        >
          My Advisors
        </h1>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button
            variant="default"
            iconLeft={<FileSpreadsheet size={16} />}
            onClick={handleExportToExcel}
          >
            Export to Excel
          </Button>
          <Button
            variant="default"
            iconLeft={<Download size={16} />}
            onClick={handleDownload}
          >
            Download
          </Button>
        </div>
      </div>

      {/* Table Container with proper dark theme styling */}
      <div
        style={{
          backgroundColor: 'var(--surface-default, #ffffff)',
          borderRadius: '8px',
          border: '1px solid var(--border-default, #e5e5e5)',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      >
        <ResizableTable
          hoverable
          resizable={true}
          columnWidths={columnWidths}
          onColumnWidthChange={handleColumnWidthChange}
          minColumnWidth={80}
        >
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Phone</TableHeaderCell>
              <TableHeaderCell>Company</TableHeaderCell>
              <TableHeaderCell>Location</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Join Date</TableHeaderCell>
              <TableHeaderCell align="right">Revenue</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {advisorData.map((advisor) => (
              <TableRow key={advisor.id}>
                <TableCell>{advisor.name}</TableCell>
                <TableCell>{advisor.email}</TableCell>
                <TableCell>{advisor.phone}</TableCell>
                <TableCell>{advisor.company}</TableCell>
                <TableCell>{advisor.location}</TableCell>
                <TableCell>{advisor.status}</TableCell>
                <TableCell>{advisor.joinDate}</TableCell>
                <TableCell align="right">{advisor.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ResizableTable>
      </div>

      {/* Examples Section */}
      <div style={{ marginTop: '48px' }}>
        <h2
          style={{
            fontSize: 'var(--font-size-h5, 20px)',
            fontWeight: 600,
            marginBottom: '16px',
            color: 'var(--text-primary, #000000)',
          }}
        >
          Table Variants
        </h2>

        {/* Bordered Table */}
        <div style={{ marginBottom: '32px' }}>
          <h3
            style={{
              fontSize: 'var(--font-size-md, 16px)',
              fontWeight: 600,
              marginBottom: '12px',
              color: 'var(--text-secondary, #666666)',
            }}
          >
            Bordered Table
          </h3>
          <div
            style={{
              backgroundColor: 'var(--surface-default, #ffffff)',
              borderRadius: '8px',
              border: '1px solid var(--border-default, #e5e5e5)',
              overflow: 'hidden',
            }}
          >
            <Table bordered>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Header 1</TableHeaderCell>
                  <TableHeaderCell>Header 2</TableHeaderCell>
                  <TableHeaderCell>Header 3</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Cell 1</TableCell>
                  <TableCell>Cell 2</TableCell>
                  <TableCell>Cell 3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cell 4</TableCell>
                  <TableCell>Cell 5</TableCell>
                  <TableCell>Cell 6</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Striped Table */}
        <div style={{ marginBottom: '32px' }}>
          <h3
            style={{
              fontSize: 'var(--font-size-md, 16px)',
              fontWeight: 600,
              marginBottom: '12px',
              color: 'var(--text-secondary, #666666)',
            }}
          >
            Striped Table
          </h3>
          <div
            style={{
              backgroundColor: 'var(--surface-default, #ffffff)',
              borderRadius: '8px',
              border: '1px solid var(--border-default, #e5e5e5)',
              overflow: 'hidden',
            }}
          >
            <Table striped>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Header 1</TableHeaderCell>
                  <TableHeaderCell>Header 2</TableHeaderCell>
                  <TableHeaderCell>Header 3</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Row 1, Cell 1</TableCell>
                  <TableCell>Row 1, Cell 2</TableCell>
                  <TableCell>Row 1, Cell 3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Row 2, Cell 1</TableCell>
                  <TableCell>Row 2, Cell 2</TableCell>
                  <TableCell>Row 2, Cell 3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Row 3, Cell 1</TableCell>
                  <TableCell>Row 3, Cell 2</TableCell>
                  <TableCell>Row 3, Cell 3</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
