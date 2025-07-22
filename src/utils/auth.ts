// src/utils/auth.ts
export function getToken(): string | null {
    return localStorage.getItem('token')
}

export function getUser(): any {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}
  