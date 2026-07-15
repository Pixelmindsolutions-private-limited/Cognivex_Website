"use client";

import React, { useState, useEffect, useMemo } from "react";

const GET_API_URL =
  "https://6a575346914a025dcff2cc0f.mockapi.io/api/cognivex/contactform/Contactdata";
const DELETE_API_URL =
  "https://6a575346914a025dcff2cc0f.mockapi.io/api/cognivex/contactform/Contactdata";

const ADMIN_PASSWORD = "123456";
const ROWS_PER_PAGE = 10;
const MESSAGE_TRUNCATE_LENGTH = 60;
const SESSION_KEY = "contact_enquiries_admin_auth";

/* ------------------------------------------------------------------ */
/* Helper functions                                                    */
/* ------------------------------------------------------------------ */

function truncateMessage(message, length = MESSAGE_TRUNCATE_LENGTH) {
  if (!message) return "";
  if (message.length <= length) return message;
  return `${message.substring(0, length)}...`;
}

function filterEnquiries(enquiries, searchTerm) {
  if (!searchTerm.trim()) return enquiries;
  const term = searchTerm.trim().toLowerCase();
  return enquiries.filter((enquiry) => {
    const name = (enquiry.name || "").toLowerCase();
    const email = (enquiry.email || "").toLowerCase();
    const phone = (enquiry.phone || "").toLowerCase();
    const service = (enquiry.service || "").toLowerCase();
    return (
      name.includes(term) ||
      email.includes(term) ||
      phone.includes(term) ||
      service.includes(term)
    );
  });
}

function getPaginatedData(data, currentPage, rowsPerPage) {
  const startIndex = (currentPage - 1) * rowsPerPage;
  return data.slice(startIndex, startIndex + rowsPerPage);
}

function buildPageNumbers(currentPage, totalPages) {
  const pages = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  }

  pages.push(1);

  if (currentPage > 4) {
    pages.push("...");
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (currentPage < totalPages - 3) {
    pages.push("...");
  }

  pages.push(totalPages);

  return pages;
}

// Assigns a consistent color pair to a service name, cycling through a
// curated premium palette so the same service always renders the same color.
const SERVICE_COLOR_PALETTE = [
  { bg: "#e0e7ff", text: "#4338ca", border: "#c7d2fe" }, // indigo
  { bg: "#dcfce7", text: "#15803d", border: "#bbf7d0" }, // green
  { bg: "#fef3c7", text: "#b45309", border: "#fde68a" }, // amber
  { bg: "#fce7f3", text: "#be185d", border: "#fbcfe8" }, // pink
  { bg: "#cffafe", text: "#0e7490", border: "#a5f3fc" }, // cyan
  { bg: "#ede9fe", text: "#6d28d9", border: "#ddd6fe" }, // violet
  { bg: "#ffe4e6", text: "#be123c", border: "#fecdd3" }, // rose
  { bg: "#dbeafe", text: "#1d4ed8", border: "#bfdbfe" }, // blue
];

function getServiceColor(service) {
  if (!service) return SERVICE_COLOR_PALETTE[0];
  let hash = 0;
  for (let i = 0; i < service.length; i++) {
    hash = service.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % SERVICE_COLOR_PALETTE.length;
  return SERVICE_COLOR_PALETTE[index];
}

/* ------------------------------------------------------------------ */
/* Login Screen Component                                              */
/* ------------------------------------------------------------------ */

function LoginScreen({ onLoginSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setError("");
      onLoginSuccess();
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 px-3"
      style={{
        background:
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 45%, #d946ef 100%)",
      }}
    >
      <div
        className="card border-0 shadow-lg"
        style={{ maxWidth: "420px", width: "100%", borderRadius: "1rem" }}
      >
        <div className="card-body p-4 p-sm-5">
          <div className="text-center mb-4">
            <div
              className="d-inline-flex align-items-center justify-content-center mb-3"
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #6366f1 0%, #d946ef 100%)",
              }}
            >
              <i
                className="bi bi-shield-lock-fill text-white"
                style={{ fontSize: "1.75rem" }}
              ></i>
            </div>
            <h3 className="card-title mb-1 fw-bold">Admin Access</h3>
            <p className="text-muted mb-0">
              Enter password to view contact enquiries.
            </p>
          </div>

          {error && (
            <div className="alert alert-danger py-2" role="alert">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="adminPassword" className="form-label visually-hidden">
                Password
              </label>
              <input
                type="password"
                id="adminPassword"
                className="form-control form-control-lg"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="btn btn-lg w-100 text-white fw-semibold border-0"
              style={{
                background:
                  "linear-gradient(135deg, #6366f1 0%, #d946ef 100%)",
              }}
            >
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Pagination Component                                                */
/* ------------------------------------------------------------------ */

function PaginationControls({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pageNumbers = buildPageNumbers(currentPage, totalPages);

  return (
    <nav aria-label="Enquiries pagination">
      <ul className="pagination flex-wrap justify-content-center justify-content-md-start mb-0 premium-pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <li key={`ellipsis-${index}`} className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          ) : (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          )
        )}

        <li
          className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Main Component                                                      */
/* ------------------------------------------------------------------ */

export default function DataForms() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [deleteSuccessMessage, setDeleteSuccessMessage] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  /* ---------------------------- Session restore --------------------------- */

  // On mount, check sessionStorage so a browser refresh (or clicking the
  // Refresh button) doesn't force the admin to log in again mid-session.
  useEffect(() => {
    try {
      const savedAuth = sessionStorage.getItem(SESSION_KEY);
      if (savedAuth === "true") {
        setIsAuthenticated(true);
      }
    } catch (error) {
      // sessionStorage unavailable (e.g. SSR) — fall back to login screen
    } finally {
      setIsCheckingSession(false);
    }
  }, []);

  const handleLoginSuccess = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch (error) {
      // ignore storage errors
    }
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch (error) {
      // ignore storage errors
    }
    setIsAuthenticated(false);
    setEnquiries([]);
    setSearchTerm("");
    setCurrentPage(1);
  };

  /* ---------------------------- Data fetching ---------------------------- */

  const fetchEnquiries = async () => {
    setIsLoading(true);
    setFetchError("");
    try {
      const response = await fetch(GET_API_URL);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      setEnquiries(Array.isArray(data) ? data : []);
    } catch (error) {
      setFetchError("Failed to load enquiries. Please try again.");
      setEnquiries([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchEnquiries();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  /* ------------------------------ Handlers ------------------------------- */

  const handleRefresh = () => {
    fetchEnquiries();
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );
    if (!confirmed) return;

    setDeletingId(id);
    try {
      const response = await fetch(`${DELETE_API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Delete failed with status ${response.status}`);
      }
      setEnquiries((prev) => prev.filter((item) => item.id !== id));
      setDeleteSuccessMessage("Enquiry deleted successfully.");
      setTimeout(() => setDeleteSuccessMessage(""), 3000);
    } catch (error) {
      setFetchError("Failed to delete enquiry. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  /* ------------------------------ Derived data ---------------------------- */

  const filteredEnquiries = useMemo(
    () => filterEnquiries(enquiries, searchTerm),
    [enquiries, searchTerm]
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEnquiries.length / ROWS_PER_PAGE)
  );

  const paginatedEnquiries = useMemo(
    () => getPaginatedData(filteredEnquiries, currentPage, ROWS_PER_PAGE),
    [filteredEnquiries, currentPage]
  );

  const startEntry =
    filteredEnquiries.length === 0
      ? 0
      : (currentPage - 1) * ROWS_PER_PAGE + 1;
  const endEntry = Math.min(
    currentPage * ROWS_PER_PAGE,
    filteredEnquiries.length
  );

  /* -------------------------------------------------------------------- */

  const bootstrapLinks = (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
      />
    </>
  );

  const premiumStyles = (
    <style>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .df-page-bg {
        background: linear-gradient(160deg, #f5f3ff 0%, #eef2ff 40%, #fdf4ff 100%);
      }
      .df-header-card {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
        border-radius: 1rem;
        color: #fff;
        border: none;
      }
      .df-stat-badge {
        background: rgba(255, 255, 255, 0.22);
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255, 255, 255, 0.35);
        color: #fff;
        font-weight: 600;
        padding: 0.5rem 1rem;
        border-radius: 999px;
      }
      .df-btn-refresh {
        background: rgba(255, 255, 255, 0.95);
        color: #6366f1;
        border: none;
        font-weight: 600;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
      }
      .df-btn-refresh:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 14px rgba(0,0,0,0.15);
        color: #4f46e5;
      }
      .df-btn-logout {
        background: rgba(255,255,255,0.12);
        color: #fff;
        border: 1px solid rgba(255,255,255,0.4);
        font-weight: 600;
      }
      .df-btn-logout:hover {
        background: rgba(255,255,255,0.22);
        color: #fff;
      }
      .df-card {
        border: none;
        border-radius: 1rem;
        box-shadow: 0 4px 20px rgba(99, 102, 241, 0.08);
      }
      .df-search-input {
        border-radius: 999px !important;
      }
      .df-search-icon {
        border-radius: 999px 0 0 999px !important;
        background: #f5f3ff !important;
        color: #6366f1;
        border-color: #e5e0ff;
      }
      .enquiries-table thead th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
        color: #fff;
        border: none;
        font-weight: 600;
        letter-spacing: 0.02em;
      }
      .enquiries-table tbody tr {
        transition: background-color 0.15s ease-in-out, transform 0.1s ease;
      }
      .enquiries-table tbody tr:nth-of-type(odd) {
        background-color: #faf9ff;
      }
      .enquiries-table tbody tr:hover {
        background-color: #f0ecff;
      }
      .enquiries-table td, .enquiries-table th {
        vertical-align: middle;
      }
      .table-responsive-wrapper {
        max-height: 65vh;
        overflow-y: auto;
        border-radius: 0.75rem;
        overflow-x: auto;
      }
      .df-service-badge {
        font-weight: 600;
        padding: 0.35em 0.7em;
        border-radius: 999px;
        font-size: 0.78rem;
        border: 1px solid transparent;
      }
      .df-delete-btn {
        background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);
        border: none;
        color: #fff;
        font-weight: 600;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
      }
      .df-delete-btn:hover:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: 0 6px 14px rgba(225, 29, 72, 0.3);
        color: #fff;
      }
      .df-delete-btn:disabled {
        opacity: 0.6;
      }
      .premium-pagination .page-link {
        cursor: pointer;
        border: none;
        color: #6366f1;
        font-weight: 500;
        margin: 0 2px;
        border-radius: 0.5rem;
      }
      .premium-pagination .page-item.active .page-link {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: #fff;
        box-shadow: 0 4px 10px rgba(99, 102, 241, 0.35);
      }
      .premium-pagination .page-item.disabled .page-link {
        color: #c4c4d4;
        background: transparent;
      }
      .fade-transition {
        animation: fadeIn 0.3s ease-in-out;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .df-alert {
        border: none;
        border-radius: 0.75rem;
      }
    `}</style>
  );

  if (isCheckingSession) {
    return (
      <>
        {bootstrapLinks}
        <div className="d-flex align-items-center justify-content-center min-vh-100 df-page-bg">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        {bootstrapLinks}
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      </>
    );
  }

  return (
    <>
      {bootstrapLinks}
      {premiumStyles}

      <div className="container-fluid py-4 px-3 px-md-4 df-page-bg min-vh-100">
        {/* Header */}
        <div className="card df-header-card shadow mb-4">
          <div className="card-body p-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <div>
                  <h4 className="mb-0 fw-bold">
                    <i className="bi bi-envelope-paper-heart-fill me-2"></i>
                    Contact Enquiries
                  </h4>
                  <div className="small opacity-75 mt-1">
                    Manage and review incoming enquiries
                  </div>
                </div>
                <span className="df-stat-badge">
                  <i className="bi bi-people-fill me-1"></i>
                  Total Enquiries: {enquiries.length}
                </span>
              </div>
              <div className="d-flex gap-2">
                <button
                  className="btn df-btn-refresh"
                  onClick={handleRefresh}
                  disabled={isLoading}
                >
                  <i className="bi bi-arrow-clockwise me-2"></i>
                  Refresh
                </button>
                <button className="btn df-btn-logout" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        {deleteSuccessMessage && (
          <div className="alert alert-success df-alert" role="alert">
            <i className="bi bi-check-circle-fill me-2"></i>
            {deleteSuccessMessage}
          </div>
        )}
        {fetchError && (
          <div className="alert alert-danger df-alert" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {fetchError}
          </div>
        )}

        {/* Search */}
        <div className="card df-card mb-4">
          <div className="card-body">
            <div className="input-group">
              <span className="input-group-text df-search-icon border">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control df-search-input"
                style={{ borderRadius: "0 999px 999px 0" }}
                placeholder="Search by name, email, phone, or service..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="card df-card">
          <div className="card-body">
            {isLoading ? (
              <div className="d-flex justify-content-center align-items-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : filteredEnquiries.length === 0 ? (
              <div className="alert alert-info df-alert mb-0" role="alert">
                <i className="bi bi-info-circle-fill me-2"></i>
                No enquiries found.
              </div>
            ) : (
              <>
                <div className="table-responsive table-responsive-wrapper fade-transition">
                  <table className="table table-bordered align-middle mb-0 enquiries-table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Service</th>
                        <th scope="col">Message</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedEnquiries.map((enquiry, index) => {
                        const color = getServiceColor(enquiry.service);
                        return (
                          <tr key={enquiry.id}>
                            <td className="fw-semibold text-muted">
                              {(currentPage - 1) * ROWS_PER_PAGE + index + 1}
                            </td>
                            <td className="fw-semibold">{enquiry.name}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.phone}</td>
                            <td>
                              <span
                                className="df-service-badge"
                                style={{
                                  backgroundColor: color.bg,
                                  color: color.text,
                                  borderColor: color.border,
                                }}
                              >
                                {enquiry.service}
                              </span>
                            </td>
                            <td title={enquiry.message}>
                              {truncateMessage(enquiry.message)}
                            </td>
                            <td className="text-muted">{enquiry.createdAt}</td>
                            <td>
                              <button
                                className="btn btn-sm df-delete-btn"
                                onClick={() => handleDelete(enquiry.id)}
                                disabled={deletingId === enquiry.id}
                              >
                                {deletingId === enquiry.id ? (
                                  <span
                                    className="spinner-border spinner-border-sm me-1"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>
                                ) : (
                                  <i className="bi bi-trash me-1"></i>
                                )}
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Footer: entries info + pagination */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mt-3">
                  <div className="text-muted small">
                    Showing {startEntry} to {endEntry} of{" "}
                    {filteredEnquiries.length} entries
                  </div>
                  <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}