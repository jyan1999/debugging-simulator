const programDescriptions = [
    {
        name: "Social Media Dashboard",
        language: "JavaScript",
        framework: "React 18.0",
        tools: "Redux Toolkit, Express.js 4.18, MongoDB Atlas, WebSocket",
        description: "A real-time social media analytics dashboard that tracks engagement metrics across multiple platforms. Features include live data updates, customizable widgets, and AI-powered sentiment analysis. The application handles multiple concurrent WebSocket connections and processes large volumes of streaming data.",
        possibleBugs: [
            {
                title: "Memory leak: WebSocket connections not properly cleaned up",
                error: "Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.\n    at Socket.disconnect (src/services/websocket.ts:142:23)\n    at Dashboard.cleanup (src/components/Dashboard.tsx:89:14)\n    at safelyCallDestroy (react-dom.development.js:22934:5)"
            },
            {
                title: "Race condition: Multiple rapid API calls causing state inconsistency",
                error: "Uncaught TypeError: Cannot read properties of undefined (reading 'payload')\n    at createAsyncThunk.fulfilled (src/store/slices/dataSlice.ts:78:31)\n    at asyncThunkCreator (redux-toolkit.esm.js:789:37)\n    at dispatch (redux.js:678:13)"
            },
            {
                title: "Performance degradation: Unnecessary re-renders in dashboard",
                error: "Warning: Detected multiple re-renders in <DashboardWidget />. Prevent infinite rendering by wrapping state updates in useCallback or useMemo.\n    at DashboardWidget (src/components/widgets/MetricsWidget.tsx:45:12)\n    at renderWithHooks (react-dom.development.js:16305:18)"
            },
            {
                title: "Data corruption: Concurrent updates to shared state",
                error: "SerializableStateInvariantMiddleware: A non-serializable value was detected in an action.\n    at createSerializableStateInvariantMiddleware (redux-toolkit.esm.js:1284:17)\n    at dispatch (redux.js:678:13)"
            },
            {
                title: "Network failure: WebSocket reconnection logic failing",
                error: "Error: WebSocket connection to 'wss://api.dashboard.com/ws' failed: Connection closed abnormally.\n    at WebSocket.onclose (src/services/WebSocketManager.ts:211:15)\n    at WebSocket.emit (events.js:315:20)"
            },
            {
                title: "State management: Redux selectors returning stale data",
                error: "Warning: A selector returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\n    at createSelector (reselect.js:145:18)\n    at useSelector (react-redux.js:456:22)"
            },
            {
                title: "UI freeze: Heavy data processing blocking main thread",
                error: "Warning: A long task took 3842ms and blocked the main thread. Consider using Web Workers.\n    at processDataBatch (src/utils/dataProcessor.ts:89:12)\n    at useEffect (src/components/DataGrid.tsx:156:23)"
            },
            {
                title: "Memory overflow: Excessive DOM nodes from chart regeneration",
                error: "Error: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.\n    at ChartComponent (src/components/Chart.tsx:234:12)"
            },
            {
                title: "Authentication error: Token refresh mechanism failing",
                error: "AxiosError: Request failed with status code 401\n    at createError (axios.js:898:15)\n    at settle (axios.js:832:12)\n    at AuthService.refreshToken (src/services/auth.ts:178:23)"
            },
            {
                title: "Data loss: Failed error boundary recovery",
                error: "Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.\n    at ErrorBoundary (src/components/ErrorBoundary.tsx:67:14)"
            },
            {
                title: "Infinite loop: Recursive API calls in useEffect",
                error: "Warning: Maximum update depth exceeded. You can likely solve this by using useCallback or removing dependencies from your useEffect hook.\n    at DataFetcher (src/components/DataFetcher.tsx:45:10)\n    at renderWithHooks (react-dom.development.js:16305:18)"
            },
            {
                title: "Type error: Undefined property access during initial render",
                error: "TypeError: Cannot read properties of undefined (reading 'user')\n    at useAppSelector (src/store/hooks.ts:12:31)\n    at UserProfile (src/components/UserProfile.tsx:23:41)"
            },
            {
                title: "Callback hell in nested API requests",
                error: "AxiosError: Network Error: Failed to fetch nested resources\n    at createError (axios.js:898:15)\n    at ApiService.fetchNested (src/services/api.ts:89:14)\n    at dispatch (redux-toolkit.esm.js:789:37)"
            },
            {
                title: "Cross-browser compatibility issues in Safari",
                error: "TypeError: 'IntersectionObserver' is not defined\n    at useIntersectionObserver (src/hooks/useIntersectionObserver.ts:78:24)\n    at ViewportTracker (src/components/ViewportTracker.tsx:45:19)"
            },
            {
                title: "Zombie event listeners after component updates",
                error: "Warning: Event listener 'scroll' was not removed. This may cause memory leaks in your application.\n    at cleanup (src/hooks/useEventListener.ts:145:18)\n    at InteractiveComponent (src/components/Interactive.tsx:89:22)"
            },
            {
                title: "Invalid JWT token format causing auth failures",
                error: "JsonWebTokenError: invalid token\n    at JwtService.verify (jsonwebtoken.js:584:17)\n    at AuthMiddleware (src/middleware/auth.ts:56:24)"
            },
            {
                title: "Memory leak in third-party chart library",
                error: "Warning: Unable to clean up chart instance. Possible memory leak detected.\n    at Chart.destroy (chart.js:4511:13)\n    at ChartComponent.unmount (src/components/Chart.tsx:245:18)"
            }
        ]
    },
    {
        name: "ML Training Pipeline",
        language: "Python 3.10",
        framework: "TensorFlow 2.12",
        tools: "pandas 2.0, numpy, scikit-learn, CUDA 11.8, Docker",
        description: "An automated machine learning pipeline for training and evaluating computer vision models. Implements distributed training across multiple GPUs, automatic hyperparameter tuning, and model versioning. Includes real-time monitoring and automated error recovery mechanisms.",
        possibleBugs: [
            {
                title: "CUDA out of memory: Incorrect batch size calculation causing GPU memory overflow",
                error: "RuntimeError: CUDA out of memory. Tried to allocate 2.4 GiB (GPU 0; 11.17 GiB total capacity; 8.54 GiB already allocated; 1.21 GiB free; 9.12 GiB reserved)\n    at train_step (model/trainer.py:156:23)\n    at Model.fit (tensorflow/python/keras/engine/training.py:1284)"
            },
            {
                title: "Data pipeline stall: Dead workers in multiprocessing data loader causing training freeze",
                error: "WARNING:tensorflow:MultiProcessingDataLoader: 2 workers have stopped responding. Restarting workers...\n    at _check_workers (tensorflow/python/data/ops/multi_process_runner.py:324:18)\n    at DataLoader._next_batch (utils/data_loader.py:189:34)"
            },
            {
                title: "Numerical instability: Gradient explosion due to improper learning rate scheduling",
                error: "WARNING:tensorflow:Gradient explosion detected. Gradient norm: 3.42e+04\n    at _apply_gradients (tensorflow/python/keras/optimizer_v2/optimizer_v2.py:634:21)\n    at train_function (model/custom_trainer.py:245:12)"
            },
            {
                title: "Resource leak: CUDA context not properly released after training completion",
                error: "W tensorflow/core/common_runtime/gpu/gpu_device.cc:1871] Cannot dlclose libcuda.so.1: Unable to destroy primary context: CUDA_ERROR_IN_USE\n    at __del__ (tensorflow/python/client/session.py:742:15)"
            },
            {
                title: "Distribution error: Incorrect sharding of data across multiple GPUs",
                error: "ValueError: Variable batch size not supported with DistributionStrategy. Received batch dimension: None\n    at _validate_global_batch_size (tensorflow/python/distribute/distribute_lib.py:951:10)\n    at DistributedTrainer.train_step (training/distributed.py:167:23)"
            },
            {
                title: "Checkpoint corruption: Incomplete model saving during distributed training",
                error: "tf.errors.InvalidArgumentError: Unsuccessful TensorSliceReader constructor: Failed to get matching files on checkpoint_path: /tmp/training/model-50000: Data loss: not found\n    at save_checkpoint (tensorflow/python/training/saving/checkpoint_management.py:312:15)"
            },
            {
                title: "Memory fragmentation: Inefficient tensor allocation causing GPU memory fragmentation",
                error: "W tensorflow/core/common_runtime/gpu/gpu_device.cc:2157] GPU memory fragmentation detected. Free memory: 4.2 GiB, largest free block: 0.8 GiB\n    at _allocate_gpu_memory (tensorflow/core/common_runtime/gpu/gpu_device.cc:2157)"
            },
            {
                title: "Pipeline deadlock: Worker processes stuck waiting for GPU synchronization",
                error: "DeadlineExceededError: MultiProcessingDataLoader timeout after 300s. Worker processes are deadlocked.\n    at _check_worker_timeout (tensorflow/python/data/ops/multi_process_runner.py:412:8)\n    at DataLoader.__next__ (utils/data_loader.py:203:15)"
            },
            {
                title: "Data corruption: Race condition in parallel data augmentation pipeline",
                error: "RuntimeError: Detected concurrent modification of shared memory array\n    at SharedMemoryManager.write (utils/augmentation.py:234:12)\n    at AugmentationWorker.process (utils/augmentation.py:156:18)"
            },
            {
                title: "Resource exhaustion: Thread pool saturation in data preprocessing",
                error: "WARNING:tensorflow:ThreadPool is saturated with 16 tasks. Queue size: 128, Active threads: 16\n    at _submit_task (tensorflow/python/data/ops/thread_pool.py:167:23)\n    at DataLoader._prefetch (utils/data_loader.py:289:14)"
            },
            {
                title: "Model divergence: NaN values propagating through the network",
                error: "RuntimeError: Loss value is NaN or Inf. Check model weights: layer 'dense_2' contains NaN values\n    at check_numerics (tensorflow/python/keras/callbacks.py:1245:19)\n    at on_batch_end (training/callbacks.py:178:23)"
            },
            {
                title: "Version mismatch: CUDA driver incompatibility causing random crashes",
                error: "ImportError: libcudart.so.11.8: cannot open shared object file: CUDA driver version is insufficient for CUDA runtime version\n    at import_cuda_toolkit (tensorflow/stream_executor/cuda/cuda_driver.cc:351:12)"
            },
            {
                title: "Memory leak: Cached preprocessed data not being cleared between epochs",
                error: "WARNING:tensorflow:Memory leak detected: DatasetCache is retaining 4.2 GiB of unused cached elements\n    at _check_cache_size (tensorflow/python/data/ops/dataset_cache.py:245:18)\n    at DataLoader.on_epoch_end (utils/data_loader.py:312:21)"
            },
            {
                title: "Performance degradation: Incorrect pinned memory usage in data loading",
                error: "W tensorflow/core/common_runtime/gpu/gpu_device.cc:1592] Sub-optimal CPU-GPU memory transfer detected. Consider using tf.data.Dataset.prefetch with gpu_prefetch\n    at _transfer_data (tensorflow/core/common_runtime/gpu/gpu_device.cc:1592)"
            },
            {
                title: "Model serialization error during checkpoint save",
                error: "tf.errors.FailedPreconditionError: Error while saving checkpoint: Unable to serialize model topology. Graph contains cycles\n    at save_model (tensorflow/python/keras/saving/save.py:678:12)"
            },
            {
                title: "Feature normalization skew in validation set",
                error: "WARNING:tensorflow:Detected significant deviation in validation set statistics. Mean difference: 1.23, Std difference: 0.89\n    at validate_normalization (utils/validation.py:145:18)\n    at DataValidator.check (utils/validation.py:234:21)"
            },
            {
                title: "Dead neurons in hidden layers causing gradient issues",
                error: "WARNING:tensorflow:Layer 'dense_1' has 45% dead neurons (zero activation in last 1000 batches)\n    at check_layer_health (tensorflow/python/keras/callbacks.py:892:15)\n    at HealthMonitor.on_batch_end (training/callbacks.py:234:18)"
            },
            {
                title: "Data augmentation pipeline thread starvation",
                error: "WARNING:tensorflow:AugmentationPipeline is experiencing thread starvation. Current throughput: 124 samples/sec (target: 500)\n    at monitor_throughput (utils/augmentation.py:567:12)\n    at AugmentationPipeline._process (utils/augmentation.py:623:15)"
            },
            {
                title: "Random seed inconsistency across distributed training",
                error: "WARNING:tensorflow:Detected inconsistent random seeds across workers. Worker 0: 42, Worker 1: 1042\n    at check_seed_consistency (tensorflow/python/distribute/distribute_lib.py:1245:14)\n    at DistributedTrainer.initialize (training/distributed.py:89:23)"
            }
        ]
    },
    {
        name: "E-commerce Backend",
        language: "Java",
        framework: "Spring Boot",
        tools: "Hibernate, PostgreSQL, Redis",
        description: "A scalable e-commerce backend handling inventory, orders, and user management.",
        possibleBugs: [
            {
                title: "Deadlock in transaction management",
                error: "org.postgresql.util.PSQLException: ERROR: deadlock detected\n  Detail: Process 1234 waits for ShareLock on transaction 5678; blocked by process 5678.\n    at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2674)\n    at com.example.ecommerce.service.OrderService.processOrder(OrderService.java:127)"
            },
            {
                title: "Connection pool exhaustion",
                error: "org.hibernate.exception.JDBCConnectionException: Unable to acquire JDBC Connection\n    at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl.getConnection(DatasourceConnectionProviderImpl.java:137)\n    Caused by: com.zaxxer.hikari.pool.PoolException: HikariPool-1 - Connection is not available, timeout after 30000ms"
            },
            {
                title: "Incorrect cache invalidation",
                error: "org.springframework.cache.Cache$ValueRetrievalException: Value for key 'product:1234' could not be loaded using 'com.example.ecommerce.service.ProductService$$Lambda$123/0x00000001234'\n    at org.springframework.cache.interceptor.CacheAspectSupport$CacheValueWrapper.getValue(CacheAspectSupport.java:1132)\n    at com.example.ecommerce.service.ProductService.getProduct(ProductService.java:89)"
            },
            {
                title: "Race condition in inventory update",
                error: "org.springframework.orm.ObjectOptimisticLockingFailureException: Object of class [com.example.ecommerce.entity.Inventory] with identifier [5678]: optimistic locking failed\n    at org.springframework.orm.jpa.vendor.HibernateJpaDialect.convertHibernateAccessException(HibernateJpaDialect.java:319)\n    at com.example.ecommerce.service.InventoryService.updateStock(InventoryService.java:156)"
            },
            {
                title: "Memory leak in session management",
                error: "java.lang.OutOfMemoryError: Java heap space\n    at org.springframework.session.data.redis.RedisSession.setAttribute(RedisSession.java:234)\n    at com.example.ecommerce.config.SessionConfig.sessionRepository(SessionConfig.java:89)\n    Caused by: Redis connection pool exhausted after storing 100000+ sessions"
            },
            {
                title: "Incorrect exception handling in REST endpoints",
                error: "org.springframework.web.util.NestedServletException: Request processing failed\n    at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1014)\n    Caused by: javax.validation.ConstraintViolationException: Validation failed for classes [com.example.ecommerce.dto.OrderRequest]"
            },
            {
                title: "N+1 query problem in ORM",
                error: "WARN  org.hibernate.engine.internal.StatisticalLoggingSessionEventListener : Session Metrics {\n    234892 nanoseconds spent acquiring 156 JDBC connections;\n    789123 nanoseconds spent executing 1532 JDBC statements;\n    Query issued for collection [com.example.ecommerce.entity.Order.items] for 150 individual entities"
            },
            {
                title: "Thread safety issue in singleton service",
                error: "java.util.ConcurrentModificationException: Map updated concurrently\n    at java.util.HashMap.putVal(HashMap.java:622)\n    at com.example.ecommerce.service.CartService.updateCart(CartService.java:167)\n    at com.example.ecommerce.service.CartService$$FastClassBySpringCGLIB$$12345.invoke(<generated>)"
            },
            {
                title: "Inconsistent transaction isolation levels",
                error: "org.springframework.dao.CannotAcquireLockException: could not execute statement; SQL [n/a]; nested exception is org.hibernate.exception.LockAcquisitionException: could not execute statement\n    at org.springframework.orm.jpa.vendor.HibernateJpaDialect.convertHibernateAccessException(HibernateJpaDialect.java:321)"
            },
            {
                title: "Stale cache in distributed session store",
                error: "org.springframework.cache.Cache.ValueRetrievalException: Redis cache 'sessionCache' contains stale value for key 'session:user:1234'\n    at org.springframework.data.redis.cache.RedisCache$RedisCacheElement.get(RedisCache.java:221)\n    at com.example.ecommerce.service.SessionService.getUserSession(SessionService.java:178)"
            },
            {
                title: "Payment gateway timeout handling error",
                error: "org.springframework.web.client.ResourceAccessException: I/O error on POST request for \"https://api.payment-gateway.com/v1/process\": Read timed out\n    at org.springframework.web.client.RestTemplate.doExecute(RestTemplate.java:785)\n    at com.example.ecommerce.service.PaymentService.processPayment(PaymentService.java:234)"
            },
            {
                title: "Race condition in inventory reservation",
                error: "org.hibernate.StaleObjectStateException: Row was updated or deleted by another transaction (or unsaved-value mapping was incorrect)\n    at org.hibernate.persister.entity.AbstractEntityPersister.check(AbstractEntityPersister.java:2567)\n    at com.example.ecommerce.service.InventoryService.reserveStock(InventoryService.java:189)"
            },
            {
                title: "Deadlock in concurrent order processing",
                error: "org.springframework.dao.DeadlockLoserDataAccessException: Deadlock found when trying to get lock; try restarting transaction\n    at org.springframework.orm.jpa.vendor.HibernateJpaDialect.convertHibernateAccessException(HibernateJpaDialect.java:297)\n    at com.example.ecommerce.service.OrderProcessingService.processOrder(OrderProcessingService.java:156)"
            }
        ]
    },
    {
        name: "Real-time Game Server",
        language: "Rust",
        framework: "Actix",
        tools: "tokio, PostgreSQL, Redis, Protocol Buffers",
        description: "A high-performance game server handling real-time multiplayer interactions, physics calculations, and state synchronization. Supports up to 10,000 concurrent connections with sub-50ms latency requirements.",
        possibleBugs: [
            {
                title: "Deadlock: Mutex contention in player state updates causing server freeze",
                error: "thread 'actix-rt:worker:1' panicked at 'deadlock detected: PlayerState mutex is already locked'\n    at src/state/player.rs:127:18\n    at src/systems/update.rs:84:23\n    note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace."
            },
            {
                title: "Memory leak: Disconnected player sessions not properly cleaned up",
                error: "WARN [memory_tracker] Potential memory leak detected: 1423 PlayerSession objects not dropped\n    at src/session/manager.rs:245:12\n    at src/actors/game_server.rs:178:34\n    note: Memory usage increased by 128MB over last 10 minutes"
            },
            {
                title: "Race condition: Concurrent physics updates causing position desync",
                error: "ERROR [physics_engine] Data race detected in position update\n    --> src/physics/world.rs:312:15\n    | \n    |     let pos = self.positions.get_mut(entity_id).unwrap();\n    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ mutable borrow occurs here\n    |     while another mutable borrow exists at src/physics/world.rs:308"
            },
            {
                title: "Network congestion: Buffer bloat in message queue causing increased latency",
                error: "WARN [actix_rt::system] Message queue capacity exceeded: 10000/10000\n    at src/net/message_handler.rs:156:8\n    note: Average message processing time: 248ms (threshold: 50ms)\n    note: Consider increasing queue capacity or adding backpressure"
            },
            {
                title: "State inconsistency: Failed transaction rollback in player inventory updates",
                error: "ERROR [tokio_postgres] Error executing transaction: could not serialize access due to concurrent update\n    at src/db/inventory.rs:234:12\n    caused by: deadlock detected\n    DETAIL:  Process 1234 waits for ShareLock on transaction 5678; blocked by process 5678."
            },
            {
                title: "Resource exhaustion: Thread pool saturation during peak concurrent connections",
                error: "ERROR [tokio::runtime] Thread pool saturated\n    at src/server/runtime.rs:167:23\n    note: All 32 threads are busy, 458 tasks queued\n    note: Consider increasing `worker_threads` or implementing backpressure"
            },
            {
                title: "Protocol error: Malformed protobuf messages causing client disconnections",
                error: "ERROR [protobuf::decode] Failed to decode message: invalid wire type 6\n    at src/protocol/codec.rs:89:15\n    note: Message type: PlayerUpdate\n    note: Bytes received: [0x08, 0x96, 0x01, 0x72, 0xFF]"
            },
            {
                title: "Timing issue: Physics update loop drifting due to improper time step handling",
                error: "WARN [physics::time] Physics update loop drift detected\n    at src/physics/loop.rs:178:23\n    note: Current delta: 32.45ms (target: 16.66ms)\n    note: Accumulated drift: 156.78ms over last 1000 ticks"
            },
            {
                title: "Memory fragmentation: Arena allocator fragmentation during long uptimes",
                error: "WARN [memory::arena] High memory fragmentation detected\n    at src/memory/arena.rs:312:18\n    note: Fragmentation ratio: 0.45\n    note: Largest contiguous block: 2.3MB\n    note: Total free space: 128.4MB"
            },
            {
                title: "Cache invalidation: Stale game state in Redis cache causing sync issues",
                error: "ERROR [redis::client] Cache inconsistency detected\n    at src/cache/state.rs:234:12\n    note: Key 'game:state:1234' has diverged from primary storage\n    note: Last update: 15s ago, Expected: 1s ago"
            },
            {
                title: "Connection leak: TCP connections not properly closed after client timeout",
                error: "WARN [actix_web::client] Connection leak detected\n    at src/net/connection.rs:167:23\n    note: 256 TCP connections in CLOSE_WAIT state\n    note: Client addresses: [\"192.168.1.123:51234\", \"192.168.1.124:51235\", ...]"
            },
            {
                title: "Data race: Unsafe access to shared game state across actor boundaries",
                error: "thread 'actix-rt:worker:3' panicked at 'assertion failed: `(left == right)`\n    left: `{:?}`, right: `{:?}`'\n    at src/actors/game_state.rs:245:12\n    note: Multiple actors attempted to modify WorldState simultaneously"
            },
            {
                title: "Performance degradation: Excessive clone operations in hot paths",
                error: "WARN [perf::profiler] Hot path detected with excessive clones\n    at src/systems/update.rs:178:23\n    note: 15000 clone operations per second\n    note: Consider using references or implementing Copy trait"
            },
            {
                title: "Resource leak: File descriptors not properly closed in asset loading",
                error: "ERROR [sys::unix::fs] Too many open files\n    at src/assets/loader.rs:156:18\n    note: Current FD count: 1024 (limit: 1024)\n    note: Leaked descriptors detected in AssetLoader::load_texture"
            },
            {
                title: "Physics engine precision loss at high velocities",
                error: "WARN [physics::integration] Precision loss detected\n    at src/physics/integrator.rs:234:15\n    note: Velocity magnitude: 1.23e8\n    note: Position error: 45.67 units at entity_id: 1234"
            },
            {
                title: "Network packet fragmentation in large state updates",
                error: "WARN [network::protocol] Packet fragmentation detected\n    at src/net/protocol.rs:312:18\n    note: Payload size: 64KB (MTU: 1500)\n    note: Consider implementing state delta compression"
            },
            {
                title: "Entity interpolation causing rubber-banding",
                error: "WARN [physics::interpolation] Large position correction required\n    at src/physics/interpolation.rs:178:23\n    note: Correction magnitude: 45.6 units\n    note: Entity ID: 1234, Velocity: [12.3, 45.6, 78.9]"
            },
            {
                title: "Collision detection failure at map boundaries",
                error: "ERROR [physics::collision] Boundary check failed\n    at src/physics/collision.rs:289:12\n    note: Entity escaped world bounds\n    note: Position: [10000.1, 234.5, -8999.9], Bounds: [-10000, 10000]"
            },
            {
                title: "State rollback synchronization error",
                error: "ERROR [game::sync] State rollback failed\n    at src/game/sync.rs:345:18\n    note: Unable to reconcile client state with server state\n    note: Tick difference: 5, Client ID: 1234, State hash mismatch"
            }
        ]
    },
    {
        name: "Cloud Infrastructure Manager",
        language: "TypeScript",
        framework: "AWS CDK",
        tools: "AWS SDK, Docker, Terraform, Kubernetes",
        description: "A sophisticated cloud infrastructure management system that handles automated deployment, scaling, and monitoring of microservices across multiple AWS regions. Implements infrastructure as code with automatic failover and disaster recovery mechanisms.",
        possibleBugs: [
            {
                title: "Resource leak: Orphaned EBS volumes not properly cleaned up",
                error: "AWS::EC2::Volume Error: Volume vol-0a1b2c3d4e5f6g7h8 is still attached to terminated instance i-0123456789abcdef0\n    at /src/stacks/storage-stack.ts:145:23\n    at AWS.EC2.describeVolumes (/node_modules/aws-sdk/clients/ec2.js:5643:12)\n    Resource cleanup failed: Unable to delete volume in state 'in-use'"
            },
            {
                title: "Configuration drift: Terraform state inconsistency causing deployment failures",
                error: "Error: Error running plan: 1 error occurred:\n    * aws_iam_role.service_role: Resource already exists, but state file is missing\n    at /src/terraform/modules/iam/main.tf:23\n    Note: Run \"terraform import aws_iam_role.service_role arn:aws:iam::123456789012:role/service-role\" to sync state"
            },
            {
                title: "Race condition: Multiple concurrent deployments corrupting shared state",
                error: "Error: Error acquiring state lock. Error message: ConditionalCheckFailedException: The conditional request failed\n    at TerraformBackend.lock (/src/backend/s3.ts:234:12)\n    Lock Info:\n      ID:        67c47729-1234-5678-9abc-def012345678\n      Path:      terraform/states/prod/terraform.tfstate\n      Operation: OperationTypeApply"
            },
            {
                title: "Security vulnerability: IAM roles with overly permissive access policies",
                error: "AWS::IAM::Role Warning: Role 'service-role-prod' has wildcard permissions\n    at /src/iam/roles.ts:178:15\n    Policy statement contains 'Resource': '*' for actions:\n      - s3:*\n      - dynamodb:*\n    Consider restricting to specific resources"
            },
            {
                title: "Network partition: Cross-region replication failing silently",
                error: "Error: Failed to replicate DynamoDB table to region us-west-2\n    at CrossRegionStack.create (/src/stacks/replication-stack.ts:267:18)\n    StatusCode: 400, RequestId: abc123def456\n    ReplicationGroup status: Degraded, Last sync: 45 minutes ago"
            },
            {
                title: "Resource exhaustion: Auto-scaling group hitting AWS API rate limits",
                error: "ThrottlingException: Rate exceeded for API: AutoScaling.DescribeAutoScalingGroups\n    at AutoScalingClient.describeAutoScalingGroups (/src/aws/auto-scaling.ts:156:23)\n    Rate: 50.2 requests/second (Limit: 50/second)\n    Retry after: 30 seconds"
            },
            {
                title: "Data loss: Backup rotation policy failing to maintain required snapshots",
                error: "AWS::Backup::BackupVault Error: Retention policy violation\n    at /src/backup/rotation.ts:234:12\n    Required snapshots: 30, Found: 12\n    Missing snapshots for dates: 2024-02-15, 2024-02-16, ...\n    Last successful backup: 2024-02-14T23:00:00Z"
            },
            {
                title: "Service discovery: DNS cache poisoning in Kubernetes cluster",
                error: "Error: CoreDNS cache inconsistency detected\n    at kubernetes/dns/coredns.go:156\n    Namespace: production\n    Service: auth-service\n    Cached IP: 10.0.1.123 (Actual: 10.0.1.234)\n    TTL: 300s"
            },
            {
                title: "Memory leak: Container memory limits not properly enforced",
                error: "Warning: Container memory usage exceeds limits\n    Pod: auth-service-5d7894b6f6-2xjn4\n    Namespace: production\n    Container Memory: 2.4GiB / 2.0GiB\n    OOMKilled: true\n    at /src/kubernetes/resources.ts:189:23"
            },
            {
                title: "Deadlock: Service mesh circular dependency in initialization",
                error: "Error: Istio sidecar initialization failed\n    at /src/mesh/istio-config.ts:278:15\n    Pod: payment-service-6b9d7c8f45-3xyz2\n    Namespace: production\n    Error: Circular dependency detected in initialization order:\n      payment-service → auth-service → cache-service → payment-service"
            },
            {
                title: "Configuration error: SSL certificate rotation failure",
                error: "AWS::CertificateManager::Certificate Error: Certificate renewal failed\n    at /src/certificates/rotation.ts:145:18\n    Certificate ARN: arn:aws:acm:us-east-1:123456789012:certificate/abc123-def456\n    Domain: api.example.com\n    Error: DNS validation timeout after 72 hours"
            },
            {
                title: "Performance degradation: Incorrect VPC peering configurations",
                error: "AWS::EC2::VPCPeering Warning: Route table misconfiguration\n    at /src/network/vpc-peering.ts:234:12\n    Peering Connection: pcx-0a1b2c3d4e5f6g7h8\n    Source VPC: vpc-123456789\n    Destination VPC: vpc-987654321\n    Missing route table entries for CIDR: 10.0.0.0/16"
            },
            {
                title: "Load balancer health check false positives",
                error: "AWS::ElasticLoadBalancingV2::TargetGroup Warning: Health check inconsistency\n    at /src/loadbalancer/health-checks.ts:167:23\n    TargetGroup: arn:aws:elasticloadbalancing:us-east-1:123456789012:targetgroup/prod-api/abc123\n    Healthy targets: 3/10\n    HTTP Status: 200 (Actual service status: 503)"
            },
            {
                title: "Auto-scaling group stuck in transition state",
                error: "Error: AutoScalingGroup stuck in transition\n    at /src/auto-scaling/group.ts:189:15\n    ASG: prod-api-cluster\n    Desired: 5, Current: 3, Pending: 2\n    Instance i-0ab1c2d3e4f5g6h7i stuck in 'pending' for 45 minutes"
            },
            {
                title: "Service mesh routing table corruption",
                error: "Error: Istio VirtualService configuration invalid\n    at /src/istio/routing.ts:234:18\n    Resource: VirtualService/api-routes\n    Namespace: production\n    Error: Conflicting route definitions for path /api/v1/users\n    Host: api.example.com"
            },
            {
                title: "Certificate rotation failure in secrets manager",
                error: "AWS::SecretsManager::Secret Error: Automatic rotation failed\n    at /src/secrets/rotation.ts:156:23\n    Secret ARN: arn:aws:secretsmanager:us-east-1:123456789012:secret:prod/api/cert-ABC123\n    Last rotation attempt: 2024-03-15T10:30:00Z\n    Error: Lambda rotation function timed out"
            },
            {
                title: "Resource quota exceeded in failover region",
                error: "AWS::ServiceQuotas Error: Service quota exceeded in region us-west-2\n    at /src/disaster-recovery/failover.ts:278:12\n    Service: EC2\n    Quota: Running On-Demand Standard (A, C, D, H, I, M, R, T, Z) instances\n    Current: 200/200\n    Required: 50 additional instances for failover"
            }
        ]
    },
    {
        name: "Real-time Video Processing Pipeline",
        language: "C++",
        framework: "FFmpeg",
        tools: "OpenCV, CUDA, GStreamer",
        description: "High-performance video processing system for real-time 4K video streams. Handles multiple concurrent streams with features like object detection, motion tracking, and video enhancement using GPU acceleration.",
        possibleBugs: [
            {
                title: "Memory corruption: Buffer overflow in frame processing pipeline",
                error: "ERROR: AddressSanitizer: heap-buffer-overflow on address 0x7f9c234a1bd0 at pc 0x000000436712 bp 0x7fff63aa1c40 sp 0x7fff63aa1c38\n    #0 0x436712 in VideoProcessor::processFrame(AVFrame*) /src/processing/frame_processor.cpp:156\n    #1 0x427834 in Pipeline::executeStep() /src/pipeline/pipeline.cpp:234\n    WRITE of size 3686400 at 0x7f9c234a1bd0 thread T0\n    Previously allocated by thread T0 here:\n    #0 0x7f47b512f6b0 in operator new[](unsigned long)"
            },
            {
                title: "Resource leak: CUDA context not released after stream termination",
                error: "CUDA_ERROR_INVALID_CONTEXT: invalid device context - using GPU context after release\n    at cuda::Stream::destroy() /src/cuda/stream_manager.cpp:189\n    Device: NVIDIA GeForce RTX 4080\n    Context ID: 0x7f47b512f6b0\n    Active allocations: 128MB unreleased"
            },
            {
                title: "Race condition: Frame buffer access conflicts in multi-threaded processing",
                error: "ThreadSanitizer: data race on address 0x7f8b23a1c890\n    #0 FrameBuffer::writeFrame() /src/buffer/frame_buffer.cpp:234\n    #1 ProcessingThread::execute() /src/threading/worker.cpp:167\n    Write of size 8 at 0x7f8b23a1c890 by thread T1:\n    Previous read of size 8 at 0x7f8b23a1c890 by main thread:"
            },
            {
                title: "Performance bottleneck: Inefficient memory transfers between CPU and GPU",
                error: "CUDA Warning: Detected non-pinned memory transfer\n    at CudaProcessor::transferFrame() /src/cuda/memory_transfer.cpp:178\n    Transfer size: 3840x2160 (4K frame)\n    Bandwidth: 2.1 GB/s (Expected: 12.8 GB/s)\n    Consider using cudaHostRegister() for pinned memory"
            },
            {
                title: "Synchronization error: Audio/video desync in processed stream",
                error: "FFmpeg Error: Non-monotonic DTS in output stream 0:1\n    Previous: 149850, Current: 149800\n    at StreamMuxer::writePacket() /src/muxing/stream_muxer.cpp:256\n    Audio delay: 250ms\n    PTS discontinuity detected"
            },
            {
                title: "Memory fragmentation: Heap fragmentation from variable-size frame allocations",
                error: "Memory Warning: Heap fragmentation detected\n    at MemoryPool::allocate() /src/memory/pool.cpp:345\n    Free memory: 1.2GB\n    Largest contiguous block: 256MB\n    Failed to allocate 512MB continuous block\n    Fragmentation ratio: 0.78"
            },
            {
                title: "Resource exhaustion: GPU memory overflow during peak processing",
                error: "CUDA_ERROR_OUT_OF_MEMORY: out of memory\n    at cv::cuda::GpuMat::allocate() /src/cuda/gpu_allocator.cpp:234\n    Device memory used: 15.6/16.0 GB\n    Allocation size requested: 786.43 MB\n    Device: NVIDIA GeForce RTX 4080"
            },
            {
                title: "Timing issue: Frame dropping due to incorrect pipeline timing",
                error: "Pipeline Warning: Frame drop detected\n    at TimestampValidator::validate() /src/pipeline/timing.cpp:189\n    Stream timestamp: 01:23:45.890\n    Dropped frames: 123 in last 60 seconds\n    Current FPS: 27.8 (Target: 30.0)"
            },
            {
                title: "Driver crash: Incompatible CUDA driver versions",
                error: "CUDA driver version is insufficient for CUDA runtime version\n    at CudaContext::initialize() /src/cuda/context.cpp:167\n    Driver version: 11.4\n    Runtime version: 12.1\n    Required minimum driver version: 12.0"
            },
            {
                title: "Data corruption: Invalid memory access in parallel processing units",
                error: "ERROR: UndefinedBehaviorSanitizer: SEGV on unknown address 0x000000000000 (pc 0x7f9c23456789)\n    #0 0x7f9c23456789 in ParallelProcessor::processChunk() /src/processing/parallel_processor.cpp:234\n    #1 0x7f9c23456790 in ThreadPool::executeTask() /src/threading/pool.cpp:167\n    The signal is caused by a READ memory access."
            },
            {
                title: "Hardware failure: Improper error handling for GPU compute errors",
                error: "CUDA_ERROR_ILLEGAL_ADDRESS: an illegal memory access was encountered\n    at ComputeKernel::execute() /src/cuda/kernels.cpp:289\n    Kernel: objectDetection\n    Grid size: (256,256,1)\n    Block size: (16,16,1)\n    Device memory address: 0xd34db33f"
            },
            {
                title: "Buffer underrun: Incorrect stream buffering strategy",
                error: "FFmpeg Warning: Buffer underflow detected\n    at StreamBuffer::readFrame() /src/streaming/buffer.cpp:178\n    Buffer occupancy: 12/120 frames\n    Input bitrate: 45.6 Mbps\n    Processing rate: 38.9 Mbps"
            },
            {
                title: "Frame buffer overflow in high bitrate streams",
                error: "ERROR: RingBuffer overflow\n    at FrameQueue::push() /src/buffer/ring_buffer.cpp:234\n    Buffer capacity: 120 frames\n    Current size: 121 frames\n    Stream bitrate: 68.5 Mbps\n    Dropping incoming frames"
            },
            {
                title: "Codec initialization failure on GPU switch",
                error: "FFmpeg Error: Cannot load NVENC codec\n    at NvencEncoder::initialize() /src/codec/nvenc.cpp:156\n    Error: Failed to open NVENC session\n    GPU: NVIDIA GeForce RTX 4080\n    Driver version: 535.98"
            },
            {
                title: "Memory leak in hardware acceleration context",
                error: "CUDA Memory Leak Detected: 1.45 GB unreleased device memory\n    at HardwareContext::cleanup() /src/hardware/context.cpp:267\n    Leaked allocations:\n      - 786.43 MB at 0x7f9c23456000\n      - 678.12 MB at 0x7f9c23789000\n    Active CUDA context: 0x7f47b512f6b0"
            },
            {
                title: "Thread pool exhaustion in frame decoder",
                error: "ERROR: ThreadPool exhausted\n    at DecoderPool::scheduleFrame() /src/decoder/pool.cpp:189\n    Active threads: 32/32\n    Queue size: 256 frames\n    Decoder utilization: 100%\n    Waiting tasks: 45"
            },
            {
                title: "Pipeline backpressure causing frame drops",
                error: "Pipeline Warning: Backpressure detected\n    at PipelineScheduler::monitor() /src/pipeline/scheduler.cpp:345\n    Input queue: 256/256 frames\n    Processing latency: 156ms (threshold: 33ms)\n    Dropped frames: 89 in last 30 seconds"
            }
        ]
    },
    {
        name: "Blockchain Smart Contract Platform",
        language: "Solidity",
        framework: "Hardhat",
        tools: "Web3.js, OpenZeppelin, Ethers.js",
        description: "A decentralized finance platform implementing complex smart contracts for automated market making, yield farming, and governance. Includes flash loan protection and multi-signature security features.",
        possibleBugs: [
            {
                title: "Integer overflow: Unchecked arithmetic in token calculations",
                error: "Error: VM Exception while processing transaction: arithmetic overflow\n    at LiquidityPool.swap (contracts/LiquidityPool.sol:167)\n    --> contracts/LiquidityPool.sol:167:12:\n    |     uint256 amountOut = tokenReserve * amountIn / (tokenReserve + amountIn);\n    |     revert with panic code 0x11 (Arithmetic operation underflowed or overflowed outside of an unchecked block)"
            },
            {
                title: "Reentrancy vulnerability: Unsafe external contract calls",
                error: "Warning: Reentrancy in LendingPool.flashLoan(address,uint256)\n    --> contracts/LendingPool.sol:234:18:\n    |     (bool success,) = msg.sender.call{value: amount}(\"\");\n    |     State changes after external call. Move state changes before external call\n    |     Reference: SWC-107"
            },
            {
                title: "Gas optimization: Inefficient storage patterns causing excessive gas costs",
                error: "Warning: Gas usage is too high in function addLiquidity()\n    at HardhatGasReporter.onTransactionComplete\n    Gas used: 486,234 (Max: 300,000)\n    --> contracts/Pool.sol:189:14:\n    |     Inefficient storage layout detected. Consider packing variables"
            },
            {
                title: "Logic error: Incorrect slippage calculations in swap operations",
                error: "Error: Transaction reverted: Slippage tolerance exceeded\n    at SwapRouter.executeSwap (contracts/SwapRouter.sol:245)\n    Actual price: 1.2345 ETH/TOKEN\n    Maximum expected: 1.2000 ETH/TOKEN\n    Slippage: 2.875% (Max allowed: 1.000%)"
            },
            {
                title: "Security vulnerability: Unprotected initializer functions",
                error: "Critical: Initializable contract is not protected\n    --> contracts/Proxy.sol:156:12:\n    |     function initialize() public {\n    |     Missing modifier 'initializer'\n    |     Reference: SWC-118\n    |     Contract can be reinitialized by any caller"
            },
            {
                title: "Race condition: Front-running vulnerability in price oracle",
                error: "Warning: Potential front-running vulnerability detected\n    --> contracts/PriceOracle.sol:178:23:\n    |     function updatePrice(uint256 newPrice) public {\n    |     Transaction pending for 3 blocks\n    |     Multiple price updates detected in same block\n    |     Reference: SWC-114"
            },
            {
                title: "State inconsistency: Incorrect nonce management in transactions",
                error: "Error: Nonce too high. Expected nonce: 42, received: 43\n    at Web3Provider.sendTransaction\n    --> contracts/MultiSigWallet.sol:289:16:\n    |     Transaction hash: 0x1234...5678\n    |     Account: 0xabcd...ef01"
            },
            {
                title: "Access control: Missing modifier in privileged function",
                error: "Critical: Access control violation\n    --> contracts/Governance.sol:234:12:\n    |     function upgradeContract(address newImpl) public {\n    |     Missing 'onlyOwner' or 'onlyAdmin' modifier\n    |     Reference: SWC-105\n    |     Function is publicly accessible"
            },
            {
                title: "Logic bomb: Time-delayed exploit in upgrade mechanism",
                error: "Warning: Suspicious time-lock implementation\n    --> contracts/TimeLock.sol:167:18:\n    |     require(block.timestamp >= executeTime, \"TimeLock: too early\");\n    |     Possible manipulation of block.timestamp\n    |     Reference: SWC-116"
            },
            {
                title: "Precision loss: Decimal handling errors in price calculations",
                error: "Error: Precision loss in calculation\n    --> contracts/PriceCalculator.sol:156:23:\n    |     uint256 price = (amount * PRECISION_FACTOR) / totalSupply;\n    |     Decimal truncation detected\n    |     Result deviates by 0.0015% from expected value"
            },
            {
                title: "Memory exhaustion: Unbounded loop in array operations",
                error: "Error: Out of gas\n    --> contracts/Staking.sol:289:14:\n    |     for(uint i = 0; i < stakers.length; i++) {\n    |     Gas limit exceeded in loop operation\n    |     Array length: 1500 items\n    |     Gas used: 12,543,678 (Block limit: 30,000,000)"
            },
            {
                title: "Contract deadlock: Incorrect handling of failed transactions",
                error: "Error: Transaction failed with reason 'SafeERC20: low-level call failed'\n    at MultiSigWallet.executeTransaction (contracts/MultiSigWallet.sol:345)\n    Transaction hash: 0x9876...5432\n    Gas used: 234,567\n    Contract address: 0x2468...0246"
            },
            {
                title: "Incorrect nonce calculation in transaction pool",
                error: "Error: Known transaction with same nonce already exists\n    at Web3Provider.sendTransaction\n    Nonce: 45\n    Existing tx hash: 0x1357...2468\n    New tx hash: 0x2468...1357\n    Gas price difference: 5 gwei"
            },
            {
                title: "Memory overflow in contract deployment",
                error: "Error: Contract code size exceeds 24576 bytes (maximum allowed size)\n    --> contracts/DEX.sol:1:1:\n    |     Contract size: 25234 bytes\n    |     Consider splitting contract into multiple smaller contracts\n    |     Reference: EIP-170"
            },
            {
                title: "Gas estimation error in complex transactions",
                error: "Error: Gas estimation failed\n    at Router.swapExactTokensForTokens (contracts/Router.sol:234)\n    Params: tokenIn=0x1234...5678, tokenOut=0x5678...1234, amount=1000000000000000000\n    Error: execution reverted: Insufficient output amount\n    Gas estimation attempted: 345,678"
            },
            {
                title: "State trie corruption in pruning process",
                error: "Error: Invalid state root\n    Expected: 0x4567...8901\n    Received: 0x1234...5678\n    Block number: 15234567\n    State root mismatch after contract interaction\n    Reference: Invalid merkle proof"
            },
            {
                title: "Race condition in mempool transaction ordering",
                error: "Warning: Multiple competing transactions detected\n    Transaction 1: 0x2468...1357 (gas price: 25 gwei)\n    Transaction 2: 0x1357...2468 (gas price: 30 gwei)\n    Target function: swapExactTokensForTokens\n    Potential sandwich attack detected"
            }
        ]
    }
]; 