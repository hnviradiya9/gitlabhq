const environmentsList = [
  {
    name: 'DEV',
    size: 1,
    id: 7,
    state: 'available',
    external_url: null,
    environment_type: null,
    last_deployment: null,
    'stop_action?': false,
    environment_path: '/root/review-app/environments/7',
    stop_path: '/root/review-app/environments/7/stop',
    created_at: '2017-01-31T10:53:46.894Z',
    updated_at: '2017-01-31T10:53:46.894Z',
  },
  {
    folderName: 'build',
    size: 5,
    id: 12,
    name: 'build/update-README',
    state: 'available',
    external_url: null,
    environment_type: 'build',
    last_deployment: null,
    'stop_action?': false,
    environment_path: '/root/review-app/environments/12',
    stop_path: '/root/review-app/environments/12/stop',
    created_at: '2017-02-01T19:42:18.400Z',
    updated_at: '2017-02-01T19:42:18.400Z',
  },
];

const serverData = [
  {
    name: 'DEV',
    size: 1,
    latest: {
      id: 7,
      name: 'DEV',
      state: 'available',
      external_url: null,
      environment_type: null,
      last_deployment: null,
      'stop_action?': false,
      environment_path: '/root/review-app/environments/7',
      stop_path: '/root/review-app/environments/7/stop',
      created_at: '2017-01-31T10:53:46.894Z',
      updated_at: '2017-01-31T10:53:46.894Z',
    },
  },
  {
    name: 'build',
    size: 5,
    latest: {
      id: 12,
      name: 'build/update-README',
      state: 'available',
      external_url: null,
      environment_type: 'build',
      last_deployment: null,
      'stop_action?': false,
      environment_path: '/root/review-app/environments/12',
      stop_path: '/root/review-app/environments/12/stop',
      created_at: '2017-02-01T19:42:18.400Z',
      updated_at: '2017-02-01T19:42:18.400Z',
    },
  },
];

const environment = {
  name: 'DEV',
  size: 1,
  latest: {
    id: 7,
    name: 'DEV',
    state: 'available',
    external_url: null,
    environment_type: null,
    last_deployment: null,
    'stop_action?': false,
    environment_path: '/root/review-app/environments/7',
    stop_path: '/root/review-app/environments/7/stop',
    created_at: '2017-01-31T10:53:46.894Z',
    updated_at: '2017-01-31T10:53:46.894Z',
  },
};

module.exports = {
  environmentsList,
  environment,
  serverData,
};