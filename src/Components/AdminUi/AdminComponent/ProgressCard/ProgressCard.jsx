import React from "react";
import { Card, ProgressBar, Container } from "react-bootstrap";
import progressData from "../../../../Data/AdminUi/NavComponent/progressData"; 

const ProgressCard = () => {
  return (
    <>
      <Container className='mt-3'>
        <div className="col-12">
          <Card className='shadow'>
            <Card.Header>
              <Card.Title className="mb-0">Progress</Card.Title>
              <p className="mb-0">
                Bootstrap custom progress bars featuring support for stacked
                bars, animated backgrounds, and text labels
              </p>
            </Card.Header>
            <Card.Body>
              <div>
                {progressData.slice(0, 5).map((progress, index) => (
                  <div className="mb-3" key={index}>
                    <ProgressBar
                      variant={progress.variant}
                      now={progress.now}
                      label={progress.label}
                      animated={progress.variant === "striped animated"}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <p className="sub-header">
                  Add <code>.progress-bar-striped</code> to any{" "}
                  <code>.progress-bar</code> to apply a stripe via CSS gradient
                  over the progress bar's background color. Additionally, you
                  can add <code>.progress-bar-animated</code> to make it
                  animated as well.
                </p>

                <div>
                  <div className="mb-3">
                    <ProgressBar striped now={10} />
                  </div>
                  <div>
                    <ProgressBar striped animated now={75} />
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <p className="sub-header">
                  Set a height value on the <code>.progress</code>. The inner{" "}
                  <code>.progress-bar</code> will automatically resize
                  accordingly.
                </p>

                <div>
                  <div className="mb-3" style={{ height: "2px" }}>
                    <ProgressBar now={25} />
                  </div>
                  <div style={{ height: "16px" }}>
                    <ProgressBar now={25} />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default ProgressCard;
