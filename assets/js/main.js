//loader
(function () {
    var App, Loader;

    Loader = (function () {
        class Loader {
            constructor() {
                this.addBanner = this.addBanner.bind(this);
            }

            start() {
                this.getElements();
                return this.addListeners();
            }

            getElements() {
                return this.el = document.getElementsByClassName("loader")[0];
            }

            addListeners() {
                this.loadSim = setInterval(() => {
                    return this.loaded += 1 + Math.floor(Math.random() * 5);
                }, 200);
                return this.loadCheck = setInterval(() => {
                    if (this.loaded < this.total) {
                        return this.addBanner();
                    } else {
                        clearInterval(this.loadSim);
                        return clearInterval(this.loadCheck);
                    }
                }, 200);
            }

            addBanner() {
                var banner, color, results;
                banner = document.createElement("i");
                color = this.lastPicked[0];
                while (this.lastPicked.indexOf(color) !== -1) {
                    color = this.colors[Math.floor(Math.random() * this.colors.length)];
                }
                this.lastPicked.unshift(color);
                this.lastPicked.pop();
                banner.setAttribute("class", color);
                this.el.insertBefore(banner, this.el.children[0]);
                results = [];
                while (this.el.children.length > 12) {
                    results.push(this.el.removeChild(this.el.children[12]));
                }
                return results;
            }

        };

        Loader.prototype.loaded = 0;

        Loader.prototype.total = 100;

        Loader.prototype.lastPicked = ["grey", "grey", "grey"];

        Loader.prototype.colors = ["red", "green", "blue", "yellow", "purple"];

        return Loader;

    }).call(this);

    App = new Loader();

    App.start();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLEdBQUEsRUFBQTs7RUFBTTtJQUFOLE1BQUEsT0FBQTs7WUFpQ0UsQ0FBQSxnQkFBQSxDQUFBOzs7TUFwQkEsS0FBTyxDQUFBLENBQUE7UUFDTCxJQUFDLENBQUMsV0FBRixDQUFBO2VBQ0EsSUFBQyxDQUFDLFlBQUYsQ0FBQTtNQUZLOztNQUlQLFdBQWEsQ0FBQSxDQUFBO2VBQ1gsSUFBQyxDQUFDLEVBQUYsR0FBTyxRQUFRLENBQUMsc0JBQVQsQ0FBZ0MsUUFBaEMsQ0FBeUMsQ0FBQyxDQUFEO01BRHJDOztNQUdiLFlBQWMsQ0FBQSxDQUFBO1FBQ1osSUFBQyxDQUFDLE9BQUYsR0FBWSxXQUFBLENBQVksQ0FBQSxDQUFBLEdBQUE7aUJBQ3RCLElBQUMsQ0FBQyxNQUFGLElBQVksQ0FBQSxHQUFJLElBQUksQ0FBQyxLQUFMLENBQVksSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLENBQTVCO1FBRE0sQ0FBWixFQUVWLEdBRlU7ZUFJWixJQUFDLENBQUMsU0FBRixHQUFjLFdBQUEsQ0FBWSxDQUFBLENBQUEsR0FBQTtVQUN4QixJQUFHLElBQUMsQ0FBQyxNQUFGLEdBQVcsSUFBQyxDQUFDLEtBQWhCO21CQUNFLElBQUMsQ0FBQyxTQUFGLENBQUEsRUFERjtXQUFBLE1BQUE7WUFHRSxhQUFBLENBQWUsSUFBQyxDQUFDLE9BQWpCO21CQUNBLGFBQUEsQ0FBZSxJQUFDLENBQUMsU0FBakIsRUFKRjs7UUFEd0IsQ0FBWixFQU1aLEdBTlk7TUFMRjs7TUFhZCxTQUFXLENBQUEsQ0FBQTtBQUNiLFlBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQTtRQUFJLE1BQUEsR0FBUyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QjtRQUNULEtBQUEsR0FBUSxJQUFDLENBQUMsVUFBVSxDQUFDLENBQUQ7QUFDcEIsZUFBTSxJQUFDLENBQUMsVUFBVSxDQUFDLE9BQWIsQ0FBc0IsS0FBdEIsQ0FBQSxLQUFtQyxDQUFDLENBQTFDO1VBQ0UsS0FBQSxHQUFRLElBQUMsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLEtBQUwsQ0FBWSxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsSUFBQyxDQUFDLE1BQU0sQ0FBQyxNQUFyQyxDQUFGO1FBRGxCO1FBRUEsSUFBQyxDQUFDLFVBQVUsQ0FBQyxPQUFiLENBQXNCLEtBQXRCO1FBQ0EsSUFBQyxDQUFDLFVBQVUsQ0FBQyxHQUFiLENBQUE7UUFFQSxNQUFNLENBQUMsWUFBUCxDQUFxQixPQUFyQixFQUErQixLQUEvQjtRQUNBLElBQUMsQ0FBQyxFQUFFLENBQUMsWUFBTCxDQUFtQixNQUFuQixFQUE0QixJQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFELENBQXpDO0FBRUE7ZUFBTSxJQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFkLEdBQXVCLEVBQTdCO3VCQUNFLElBQUMsQ0FBQyxFQUFFLENBQUMsV0FBTCxDQUFrQixJQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFELENBQS9CO1FBREYsQ0FBQTs7TUFYUzs7SUFqQ2I7O3FCQUVFLE1BQUEsR0FBUTs7cUJBQ1IsS0FBQSxHQUFPOztxQkFDUCxVQUFBLEdBQVksQ0FBRSxNQUFGLEVBQVcsTUFBWCxFQUFvQixNQUFwQjs7cUJBQ1osTUFBQSxHQUFRLENBQ04sS0FETSxFQUVOLE9BRk0sRUFHTixNQUhNLEVBSU4sUUFKTSxFQUtOLFFBTE07Ozs7OztFQTBDVixHQUFBLEdBQU0sSUFBSSxNQUFKLENBQUE7O0VBQ04sR0FBRyxDQUFDLEtBQUosQ0FBQTtBQWhEQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExvYWRlclxuICBcbiAgbG9hZGVkOiAwXG4gIHRvdGFsOiAxMDBcbiAgbGFzdFBpY2tlZDogWyBcImdyZXlcIiAsIFwiZ3JleVwiICwgXCJncmV5XCIgXVxuICBjb2xvcnM6IFtcbiAgICBcInJlZFwiXG4gICAgXCJncmVlblwiXG4gICAgXCJibHVlXCJcbiAgICBcInllbGxvd1wiXG4gICAgXCJwdXJwbGVcIlxuICBdXG4gIFxuICBzdGFydDogLT5cbiAgICBALmdldEVsZW1lbnRzKClcbiAgICBALmFkZExpc3RlbmVycygpXG4gICAgXG4gIGdldEVsZW1lbnRzOiAtPlxuICAgIEAuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9hZGVyXCIpWzBdXG4gICAgXG4gIGFkZExpc3RlbmVyczogLT5cbiAgICBALmxvYWRTaW0gPSBzZXRJbnRlcnZhbCA9PlxuICAgICAgQC5sb2FkZWQgKz0gMSArIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiA1ICkgIFxuICAgICwgMjAwXG4gICAgXG4gICAgQC5sb2FkQ2hlY2sgPSBzZXRJbnRlcnZhbCA9PlxuICAgICAgaWYgQC5sb2FkZWQgPCBALnRvdGFsXG4gICAgICAgIEAuYWRkQmFubmVyKClcbiAgICAgIGVsc2VcbiAgICAgICAgY2xlYXJJbnRlcnZhbCggQC5sb2FkU2ltIClcbiAgICAgICAgY2xlYXJJbnRlcnZhbCggQC5sb2FkQ2hlY2sgKVxuICAgICwgMjAwXG4gICAgXG4gIGFkZEJhbm5lcjogPT5cbiAgICBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKVxuICAgIGNvbG9yID0gQC5sYXN0UGlja2VkWzBdXG4gICAgd2hpbGUgQC5sYXN0UGlja2VkLmluZGV4T2YoIGNvbG9yICkgaXNudCAtMVxuICAgICAgY29sb3IgPSBALmNvbG9yc1sgTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIEAuY29sb3JzLmxlbmd0aCldXG4gICAgQC5sYXN0UGlja2VkLnVuc2hpZnQoIGNvbG9yIClcbiAgICBALmxhc3RQaWNrZWQucG9wKClcbiAgICBcbiAgICBiYW5uZXIuc2V0QXR0cmlidXRlKCBcImNsYXNzXCIgLCBjb2xvciApXG4gICAgQC5lbC5pbnNlcnRCZWZvcmUoIGJhbm5lciAsIEAuZWwuY2hpbGRyZW5bMF0gKVxuICAgIFxuICAgIHdoaWxlIEAuZWwuY2hpbGRyZW4ubGVuZ3RoID4gMTJcbiAgICAgIEAuZWwucmVtb3ZlQ2hpbGQoIEAuZWwuY2hpbGRyZW5bMTJdIClcbiAgICBcbkFwcCA9IG5ldyBMb2FkZXJcbkFwcC5zdGFydCgpIl19
//# sourceURL=coffeescript