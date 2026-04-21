import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// --- Auth Slice ---
interface AuthState {
  user: { username: string } | null;
  token: string | null;
}

const initialAuthState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: { username: string }; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', action.payload.token);
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
    },
  },
});

// --- Projects Slice ---
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
}

interface ProjectsState {
  items: Project[];
  loading: boolean;
}

const initialProjectsState: ProjectsState = {
  items: [],
  loading: false,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialProjectsState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.items = action.payload;
    },
    setProjectsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// --- Testimonials Slice ---
interface Testimonial {
  id: number;
  author: string;
  message: string;
}

interface TestimonialsState {
  items: Testimonial[];
  loading: boolean;
}

const initialTestimonialsState: TestimonialsState = {
  items: [],
  loading: false,
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: initialTestimonialsState,
  reducers: {
    setTestimonials: (state, action: PayloadAction<Testimonial[]>) => {
      state.items = action.payload;
    },
    setTestimonialsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const { setProjects, setProjectsLoading } = projectsSlice.actions;
export const { setTestimonials, setTestimonialsLoading } = testimonialsSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    projects: projectsSlice.reducer,
    testimonials: testimonialsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
